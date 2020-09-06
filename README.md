## Netflix Clone Project

http://netflix-clone-bucket-hsj.s3-website.ap-northeast-2.amazonaws.com/Netflix_Clone

A Single-Page Web Applicaiton cloning Netflix, built with React JS, Redux, SCSS, and TMDB API.

React framework으로 넷플릭스을 클론한 SPA 프로젝트 입니다.

### `Project Status`

This project is currently in development. Users can search for movies with titles and watch the trailers availabe on Youtube. Functionality to store movies selected by the user ("My List") and improvement in UI are in progress.

이 프로젝트는 아직 진행 중입니다. 현재로선 유저는 영화를 검색할 수 있고 선택한 영화의 예고편을 유튜브를 통해 볼 수 있습니다. 유저가 고른 영화를 DB에 저장하거나 ("내가 찜한 콘텐츠") 전반적인 UI 개선을 목표로 현재 개발하고 있습니다.

### `Project Screen Shots`

Screen Shot of the homepage
<img src="./images/ScreenShot1.png">

Screen Shot of the Search page
<img src="./images/ScreenShot2.png">

### `Reflection`

I started this project to get a better grasp of web development; Project goals included using technologies (specifically, React JS) learned up until this point and training myself with git command lines by cloning a webpage that I am very much familiar with.

One of the biggest challenges I faced was refactoring asynchronous API calls using Redux. This led me to spend a couple of days studying the mechanisms behind Redux and Redux middlewares, and I was able to pull it off using Redux-thunk. I also had to spend reasonable amount of time adjusting the component styling to replicate the actual Netflix as precisely as possible.

At the end of the day, the technologies I used for this project include React (CRA), React-Router, SCSS, Redux, Redux-Thunk, Axios, react-youtube, and movie-trailer API.

웹 개발에 입문하고 React를 더욱 이해할 수 있도록 이 클론 프로젝트를 시작하였는데, 진행할수록 지금까지 공부한 React와 Git을 활용한 개발과정을 체험할 수 있어서 좋았습니다.

제일 어려웠던 부분은 아무래도 리덕스를 활용해서 비동기적인 작업을 처리하는 코드를 refactoring 할 때였는데, 이를 계기로 리덕스와 리덕스 미들웨어, 특히 Redux-thunk를 다시 공부하는 계기가 되었습니다. 이와 더불어 실제 넷플릭스와 유사하도록 컴포넌트 스타일링에 많은 시간과 고민을 투자하였습니다.

결론적으론 이 프로젝트에 활용된 기술들은 React (CRA), React-Router, SCSS, Redux, Redux-Thunk, Axios, react-youtube, 그리고 movie-trailer API 입니다.

### `References`

https://www.youtube.com/watch?v=XtMThy8QKqU

This tutorial was used as a reference for Netflix styling and using the TMDB database.

넷플릭스 스타일링과 TBDB 활용 방법은 이 튜토리얼을 참고했습니다.
