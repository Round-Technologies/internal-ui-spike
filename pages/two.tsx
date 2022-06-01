import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='ion-page'>
      <ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons collapse="true" slot="end">
      <ion-button>Click Me</ion-button>
    </ion-buttons>
    <ion-title>Settings</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-buttons collapse="true" slot="end">
        <ion-button>Click Me</ion-button>
      </ion-buttons>
      <ion-title size="large">Settings</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>



    <ion-grid>
      <ion-row>
        {new Array(8).fill('').map((k, i) => (
          <ion-col key={i} size="3">
            <Link passHref href="/">
            <ion-card>
              <Image
                src="/cat.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <ion-card-header>
                <ion-card-subtitle>Destination</ion-card-subtitle>
                <ion-card-title>Madison, WI</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-icon name="pin" slot="start"></ion-icon>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </ion-card-content>
              </ion-card>
              </Link>
          </ion-col>
        ))}
      </ion-row>
      </ion-grid>
</ion-content>
      
      </div>
  )
}
