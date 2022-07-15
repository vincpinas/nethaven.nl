import React from 'react';
import { Link } from 'react-router-dom';
import './Vacancies.scss';

function Vacancies() {
  const vacancies: any[]|[] = [
    { slug: 'front-end-developer', name: 'Front-end developer', exp: 2 },
    { slug: 'stagair-webdesign', name: 'Stagair Webdesign', exp: 0 },
    { slug: 'stagair-back-end-developer', name: 'Stagair Back-end developer', exp: 0 },
  ]

  return (
    <div id='vacanciesContainer'>
      <h1>Kom werken bij ons</h1>
      <h3 className='vacanciesHeading'>
        Elk project is een samenspel van individuen en daarom kijken wij voorbij jou kwalificaties
        naar jou mensenlijke kwaliteiten en helpen wij elkaar de goede kant op groeien.
      </h3>
      <h3 className='openVacanciesHeading'>
        Open Vacatures
      </h3>
      <ul>
        {
          vacancies.length > 0 ? vacancies.map((vacancy: any) => {
            return (
              <li key={`vacancy-${Math.random()}`}>
                <Link to={`/vacatures/${vacancy.slug}`}>
                  <h5>{vacancy.name}</h5>
                  <span>{vacancy.exp} jaar erv.</span>
                </Link>
              </li>
            )
          }) : <h4>Er zijn momenteel geen vacatures open</h4>
        }
      </ul>
    </div>
  )
}

export default Vacancies;
