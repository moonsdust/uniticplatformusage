import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

let formFields = {}
function choice(e) {
  formFields['usage'] = e;
}

const submit = async () => {
  const r = await fetch('/api/platformusage', {
      body: JSON.stringify(formFields),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
  })
  const res = await r.json();
  if (res["success"]) {
    alert(res["success"]);
    // TODO: redirect to next page
  } else {
    alert(res["error"]);
    // TODO: create a better looking alert with the error message
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unitic</title>
        <meta name="description" content=" " />
        <link rel="icon" href=" " />
      </Head>

    {/* Platform Usage Page */}
      <main className="grid grid-cols-2">

      {/* Slider */}
      <div className={styles.slider}>
        <Image src="/images/tasks-slide.svg" width={10} height={10} layout="responsive" className={styles.desktop}/>
      </div>

      {/* Selection Area */}
      <div className={styles.selection}>
        <h1 className={styles.title}>
            Platform Usage
        </h1>
        <p className={styles.description}>
            What do you plan to use Unitic for?
        </p>

      <hr className={styles.hr1}></hr>

      {/*Selection Buttons*/}
        <button className={styles.pltusagebutton} onClick={() => choice(0)}>
          <div className={styles.gridcols3}>
            <Image src="/images/icons/person.svg" width={71} height={71} layout="responsive" className={styles.personicon}/>
            <div>
              <h2>Individual</h2>
              <p>Personal account to manage your treatment.</p>
            </div>
          </div>
        </button>

        <button className={styles.pltusagebutton} onClick={() => choice(1)}>
        <div className={styles.gridcols3}>
            <Image src="/images/icons/briefcase.svg" width={71} height={71} layout="responsive" className={styles.briefcase}/>
            <div>
              <h2>Business</h2>
              <p>Own or belong to a clinic/hospital, this is for you.</p>
            </div>
        </div>
        </button>

        <button className={styles.pltusagebutton} onClick={() => choice(2)}>
        <div className={styles.gridcols3}>
            <Image src="/images/icons/education.svg" width={71} height={71} layout="responsive" className={styles.education}/>
            <div>
              <h2>Education</h2>
              <p>Used for tic treatment and awareness.</p>
            </div>
        </div>
        </button>

        <div className="grid-flow-row space-x-10">
          <button className={styles.buttonnb}>
            <a href="#">Back</a>
          </button>
          <button className={styles.button} onClick={() => submit()}>
            <a href="#">Next</a>
          </button>
        </div>
    </div>
      </main>
    </div>
  )
}