import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/ProjectCard';
import ProjectPanel from './components/ProjectPanel';

class App extends Component {
  render() {
    const projects = [
      {
        title: "スポーツには世界と未来を帰る力がある。東京オリンピック2020",
        projectType: "normal",
        thumb: "https://tokyo2020.jp/jp/assets/img/pages/news/20170525-01.jpg",
        projectUrl: "https://readyfor.jp/projects/solarboat",
        goalPrice: 20000000,
        amount: 20950000,
        leftTime: "33日",
        user: { name: "武藤敏郎(事務総長CEO)", thumb: "https://www.mitsui.com/jp/ja/company/outline/officer/__icsFiles/afieldfile/2015/09/11/222_detail_12.jpg" }
      },{
        title: "スポーツには世界と未来を帰る力がある。東京オリンピック2020",
        projectType: "normal",
        thumb: "https://tokyo2020.jp/jp/assets/img/pages/news/20170525-01.jpg",
        projectUrl: "https://readyfor.jp/projects/solarboat",
        goalPrice: 20000000,
        amount: 20950000,
        leftTime: "33日",
        user: { name: "武藤敏郎(事務総長CEO)", thumb: "https://www.mitsui.com/jp/ja/company/outline/officer/__icsFiles/afieldfile/2015/09/11/222_detail_12.jpg" }
      },{
        title: "スポーツには世界と未来を帰る力がある。東京オリンピック2020",
        projectType: "normal",
        thumb: "https://tokyo2020.jp/jp/assets/img/pages/news/20170525-01.jpg",
        projectUrl: "https://readyfor.jp/projects/solarboat",
        goalPrice: 20000000,
        amount: 20950000,
        leftTime: "33日",
        user: { name: "武藤敏郎(事務総長CEO)", thumb: "https://www.mitsui.com/jp/ja/company/outline/officer/__icsFiles/afieldfile/2015/09/11/222_detail_12.jpg" }
      },{
        title: "スポーツには世界と未来を帰る力がある。東京オリンピック2020",
        projectType: "normal",
        thumb: "https://tokyo2020.jp/jp/assets/img/pages/news/20170525-01.jpg",
        projectUrl: "https://readyfor.jp/projects/solarboat",
        goalPrice: 20000000,
        amount: 20950000,
        leftTime: "33日",
        user: { name: "武藤敏郎(事務総長CEO)", thumb: "https://www.mitsui.com/jp/ja/company/outline/officer/__icsFiles/afieldfile/2015/09/11/222_detail_12.jpg" }
      },{
        title: "スポーツには世界と未来を帰る力がある。東京オリンピック2020",
        projectType: "normal",
        thumb: "https://tokyo2020.jp/jp/assets/img/pages/news/20170525-01.jpg",
        projectUrl: "https://readyfor.jp/projects/solarboat",
        goalPrice: 20000000,
        amount: 20950000,
        leftTime: "33日",
        user: { name: "武藤敏郎(事務総長CEO)", thumb: "https://www.mitsui.com/jp/ja/company/outline/officer/__icsFiles/afieldfile/2015/09/11/222_detail_12.jpg" }
      }      
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="app-container">
          <ProjectPanel projects={ projects } />
        </div>

        <div className="app-container">
          <ProjectCard
            title={ "スポーツには世界と未来を帰る力がある。東京オリンピック2020" }
            projectType={ "normal" }
            thumb={ "https://tokyo2020.jp/jp/assets/img/pages/news/20170525-01.jpg" }
            projectUrl={ "https://readyfor.jp/projects/solarboat" }
            goalPrice={ 20000000 }
            amount={ 20950000 }
            leftTime={ "33日" }
            user={ { name: "武藤敏郎(事務総長CEO)", thumb: "https://www.mitsui.com/jp/ja/company/outline/officer/__icsFiles/afieldfile/2015/09/11/222_detail_12.jpg" } }
          />

          <ProjectCard
            title={ "人生最後の挑戦！ピラミッドの謎解明のカギを握る太陽の船復元へ!" }
            projectType={ "normal" }
            thumb={ "https://readyfor.jp/s3/readyfor-img/project_images/12194/large/5b067a704b388146d7cd69be634c3c06b7286aa5.JPG?1491513705" }
            projectUrl={ "https://readyfor.jp/projects/solarboat" }
            goalPrice={ 20000000 }
            amount={ 20950000 }
            leftTime={ "33日" }
            user={ { name: "吉村作治(NPO法人太陽の船復元研究所所長)", thumb: "https://readyfor.jp/s3/readyfor-img/user_images/269607/medium/4fc4b9d7c93013650208f752ec0b378f28883144.JPG?1495778978" } }
          />

          <ProjectCard
            title={ "人生最後の挑戦！ピラミッドの謎解明のカギを握る太陽の船復元へ!" }
            projectType={ "charity" }
            thumb={ "https://readyfor.jp/s3/readyfor-img/project_images/12194/large/5b067a704b388146d7cd69be634c3c06b7286aa5.JPG?1491513705" }
            projectUrl={ "https://readyfor.jp/projects/solarboat" }
            goalPrice={ 20000000 }
            amount={ 20950000 }
            leftTime={ "33日" }
            user={ { name: "吉村作治(NPO法人太陽の船復元研究所所長)", thumb: "https://readyfor.jp/s3/readyfor-img/user_images/269607/medium/4fc4b9d7c93013650208f752ec0b378f28883144.JPG?1495778978" } }
          />

          <ProjectCard
            title={ "人生最後の挑戦！ピラミッドの謎解明のカギを握る太陽の船復元へ!" }
            projectType={ "charity" }
            thumb={ "https://readyfor.jp/s3/readyfor-img/project_images/12194/large/5b067a704b388146d7cd69be634c3c06b7286aa5.JPG?1491513705" }
            projectUrl={ "https://readyfor.jp/projects/solarboat" }
            goalPrice={ 20000000 }
            amount={ 20950000 }
            leftTime={ "33日" }
            user={ { name: "吉村作治(NPO法人太陽の船復元研究所所長)", thumb: "https://readyfor.jp/s3/readyfor-img/user_images/269607/medium/4fc4b9d7c93013650208f752ec0b378f28883144.JPG?1495778978" } }
          />
        </div>
      </div>
    );
  }
}

export default App;
