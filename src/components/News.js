import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Frances Stead Sellers",
      "title": "Four years on, long covid still confounds us. Here's what we now know. - The Washington Post",
      "description": "As many as 7 percent of Americans report having suffered from a slew of lingering symptoms after enduring covid.",
      "url": "https://www.washingtonpost.com/health/2023/12/31/long-covid-symptoms-treatment-research/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HCFG66E674I6ZFBYEVLQTNWN3Q.jpg&w=1440",
      "publishedAt": "2023-12-31T16:34:49Z",
      "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nMany people now view covid-19 as an almost routine inconvenience, much like flu, RSV and other seasonal infections. But four years aft… [+990 chars]"
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": "Scott Polacek",
      "title": "Schefter: Brad Allen's Referee Crew Expected to Get Downgraded for 2024 NFL Playoffs - Bleacher Report",
      "description": "Official Brad Allen's referee crew was a major storyline in yet another primetime NFL game this season when the Dallas Cowboys defeated the Detroit Lions, and…",
      "url": "https://bleacherreport.com/articles/10103081-schefter-brad-allens-referee-crew-expected-to-get-downgraded-for-2024-nfl-playoffs",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1704036959/njtgjsyablfrjt3totuj.jpg",
      "publishedAt": "2023-12-31T15:56:15Z",
      "content": "Andy Lewis/Icon Sportswire via Getty Images\r\nOfficial Brad Allen's referee crew was a major storyline in yet another primetime NFL game this season when the Dallas Cowboys defeated the Detroit Lions,… [+3203 chars]"
    },
    {
      "source": { "id": "financial-times", "name": "Financial Times" },
      "author": "Edward White",
      "title": "Xi Jinping uses new year message to sound warning to Taiwan - Financial Times",
      "description": "China’s leader says unification is ‘historical inevitability’ as island prepares for presidential election",
      "url": "https://www.ft.com/content/fc1dfe48-a390-48c3-b27c-7e405978c166",
      "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F284f8207-279d-4ff1-b0c6-bf4c641c0100.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
      "publishedAt": "2023-12-31T14:05:27Z",
      "content": "Chinese President Xi Jinping has used his annual new year address to the nation to sound a warning to Taiwans voters days ahead of the islands presidential election, while highlighting his countrys t… [+2686 chars]"
    },
    {
      "source": { "id": "politico", "name": "Politico" },
      "author": null,
      "title": "Fetterman: I assumed speaking about mental health challenges would end my career - POLITICO",
      "description": "“It’s a risk that I wanted to take because I wanted to help people,\" the Pennsylvania senator said.",
      "url": "https://www.politico.com/news/2023/12/31/john-fetterman-mental-health-00133359",
      "urlToImage": "https://static.politico.com/14/78/4494cb724472b84a7fce0f571367/biden-74114.jpg",
      "publishedAt": "2023-12-31T14:00:00Z",
      "content": "Pa. Lt. Gov. and senatorial candidate John Fetterman speaks to a crowd gathered at aa United Steel Workers of America Labor Day event with President Joe Biden in West Mifflin, Pa., just outside Pitts… [+532 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Russia targets Ukraine ‘military’ sites in retaliation for Belgorod attack - Al Jazeera English",
      "description": "Kharkiv, Kyiv and other cities attacked in the latest wave of attacks, while missile alert sounded in Russia’s Belgorod.",
      "url": "https://www.aljazeera.com/news/2023/12/31/russia-targets-ukraine-military-sites-in-retaliation-for-belgorod-attack",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-12-31T100439Z_1657265110_RC2985A92DR3_RTRMADP_3_UKRAINE-CRISIS-ATTACK-KHARKIV-1704022638.jpg?resize=1920%2C1440",
      "publishedAt": "2023-12-31T13:41:15Z",
      "content": "Russia says it has targeted Ukrainian military sites in the capital Kyiv and Kharkiv in a new wave of drone and missile attacks in days, in retaliation for a deadly attack a day earlier on the city o… [+5418 chars]"
    },
    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Anders Hagstrom",
      "title": "Kim Jong Un reveals New Year's resolution to make more nukes and launch military satellites - Fox News",
      "description": "North Korea's Kim Jong Un vowed to develop an \"overwhelming war response capability\" on Saturday by developing nuclear materials and military satellites.",
      "url": "https://www.foxnews.com/world/kim-jong-un-reveals-new-years-resolution-make-more-nukes-launch-military-satellites",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/AP23254847251039.jpg",
      "publishedAt": "2023-12-31T12:28:00Z",
      "content": "North Korean dictator Kim Jong Un declared that his nation will develop more nuclear materials and launch three more military satellites in 2024.\r\nNorth Korean state media reported the leader's New Y… [+1859 chars]"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "The Associated Press",
      "title": "New Zealand's Auckland is the first major city to ring in 2024 - The Associated Press",
      "description": "Auckland has become the first major city to ring in 2024, with thousands cheering a fireworks display sprouting from New Zealand’s tallest structure, Sky Tower, and a downtown light show. This year’s New Year’s Eve celebrations are overshadowed by the ongoing…",
      "url": "https://apnews.com/article/times-square-new-years-eve-ball-drop-17154156831f22b2354b82688d4272af",
      "urlToImage": "https://dims.apnews.com/dims4/default/20fc077/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fac%2Fc9%2F6c9d4a27edfd402252d9fef25b23%2Fc1aee31902a04a98924cfb78a1fc8909",
      "publishedAt": "2023-12-31T11:49:00Z",
      "content": "Auckland has become the first major city to ring in 2024, with thousands cheering a fireworks display sprouting from New Zealands tallest structure, Sky Tower, and a downtown light show.\r\nThis years … [+6017 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row" >
          {this.state.articles.map((element)=> {
            return <div className="col-md-4 my-1" key={element.url}>
              <NewsItem title={element.title.length>=45 ? element.title.slice(0, 45) + "..." : element.title} 
              description={element.description.length>=60 ? element.description.slice(0, 60) + "..." : element.description} 
              imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News