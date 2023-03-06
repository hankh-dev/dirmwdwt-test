import * as D from './data'

export default function App() {
  console.log(D.makeArray(4))
  console.log(D.range(4,61))
  console.log(D.random(4,61))
  const ra = D.randomAvatar();
  const ri = D.randomImage();
  console.log(ra);
  console.log(ri);
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </div>
  )
}
