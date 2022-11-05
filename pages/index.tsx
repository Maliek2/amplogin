import Head from 'next/head'
import { useAmp } from 'next/amp'
import Byline from '../components/Byline'

export const config = {
  amp: 'hybrid',
}

export default function DogPage() {
  const isAmp = useAmp()

  return (
    <div>
      <Head>
        <title>VueFront By Maliek</title>
      </Head>
      <h1>News Blog Press</h1>
      <Byline author="Techniques" />
      <p>
        <a href={isAmp ? '/amp/' : '/?amp=1'}>
          {isAmp ? 'View Non-AMP' : 'View AMP'} Version
        </a>
      </p>
      <p className="caption">Maliek Galant</p>
      <p>
        What type of page is this ?{' '}
        <a href={isAmp ? '/login?amp=1' : '/normal'}>Checkout Login</a>. Marzipan gummi
        bears pie danish lollipop pudding powder gummi bears sweet. Pie sweet
        roll sweet roll topping chocolate bar dragée pudding chocolate cake.
        Croissant sweet chocolate bar cheesecake candy canes. Tootsie roll icing
        macaroon bonbon cupcake apple pie candy canes biscuit candy canes.
        Jujubes jelly liquorice toffee gingerbread. Candy tootsie roll macaroon
        chocolate bar icing sugar plum pie. Icing gummies chocolate bar
        chocolate marzipan bonbon cookie chocolate tart. Caramels danish halvah
        croissant. Cheesecake cookie tootsie roll ice cream. Powder dessert
        carrot cake muffin tiramisu lemon drops liquorice topping brownie.
        Soufflé chocolate cake croissant cupcake jelly.
      </p>
      <p>
        Muffin gummies dessert cheesecake candy canes. Candy canes danish cotton
        candy tart dessert powder bear claw marshmallow. Muffin chocolate
        marshmallow danish. Chocolate bar biscuit cake tiramisu. Topping sweet
        brownie jujubes powder marzipan. Croissant wafer bonbon chupa chups cake
        cake marzipan caramels jujubes. Cupcake cheesecake sweet roll
        marshmallow lollipop danish jujubes jelly icing. Apple pie chupa chups
        lollipop jelly-o cheesecake jelly beans cake dessert. Tootsie roll
        tootsie roll bonbon pastry croissant gummi bears cake cake. Fruitcake
        sugar plum halvah gingerbread cookie pastry chupa chups wafer lemon
        drops. Marshmallow liquorice oat cake lollipop. Lemon drops oat cake
        halvah liquorice danish powder cupcake soufflé. Cake tart topping
        jelly-o tart sugar plum. Chocolate bar cookie wafer tootsie roll candy
        cotton candy toffee pie donut.
      </p>
      <p>
        Ice cream lollipop marshmallow tiramisu jujubes croissant. Bear claw
        lemon drops marzipan candy bonbon cupcake powder. Candy canes cheesecake
        bear claw pastry cake donut jujubes. Icing tart jelly-o soufflé bonbon
        apple pie. Cheesecake pie chupa chups toffee powder. Bonbon lemon drops
        carrot cake pudding candy halvah cheesecake lollipop cupcake. Pudding
        marshmallow fruitcake. Gummi bears bonbon chupa chups lemon drops. Wafer
        dessert gummies gummi bears biscuit donut tiramisu gummi bears brownie.
        Tootsie roll liquorice bonbon cookie. Sesame snaps chocolate bar cake
        croissant chupa chups cheesecake gingerbread tiramisu jelly. Cheesecake
        ice cream muffin lollipop gummies. Sesame snaps jelly beans sweet bear
        claw tart.
      </p>
      <p>
        Sweet topping chupa chups chocolate cake jelly-o liquorice danish.
        Pastry jelly beans apple pie dessert pastry lemon drops marzipan
        gummies. Jelly beans macaroon bear claw cotton candy. Toffee sweet
        lollipop toffee oat cake. Jelly-o oat cake fruitcake chocolate bar
        sweet. Lemon drops gummies chocolate cake lollipop bear claw croissant
        danish icing. Chocolate bar donut brownie chocolate cake lemon drops
        chocolate bar. Cake fruitcake pudding chocolate apple pie. Brownie
        tiramisu chocolate macaroon lemon drops wafer soufflé jujubes icing.
        Cheesecake tiramisu cake macaroon tart lollipop donut. Gummi bears
        dragée pudding bear claw. Muffin cake cupcake candy canes. Soufflé candy
        canes biscuit. Macaroon gummies danish.
      </p>
      
    </div>
  )
}
