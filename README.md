# INFSCI 2560 Project 2 - Explore a JS Framework

Name: Cai-Cian Song
Email: cas386@pitt.edu
Host: https://edensung25-infsci2560-project2.glitch.me/
project on Glitch: https://glitch.com/~edensung25-infsci2560-project2
## Introduction
This project is a single page web application and the purpose is to learn how to use a front-end Js framework, like Vue.js, Angular.js, or React and implement a website. I choose React as front-end Js framwork and firebase as back-end storage, and implment a voting system for Nintendo switch games. The data resource came from Amazon search result, I wrote a python script to scrab game title and image from Amazon server.

## Q & A
### What framework did you pick and why?
In this project, I choose **React** because I used React-native during this summer to built a mobile application. So, I was wondering what  differences between React and React Native. It turns out that there is not differences, if we only focus on rendering part of the projects. Both of them use props and state to save the data and propagate data to Components. And the other deciding factor to make this decision is I read all of the documents provided from the project description, there are more people willing to use React again, compared to Angular.js. I think that is a important indicator for me to not using Angular.js.

### What about that framework appealed to you, for this project?
I used elimination to choose the framwork. I already knew how to use Vue.js, which is my first choice when I implement in a real-world project. However, from learning perspective, I was choosing from React and Angular. There are several reasons for me not to choose Angular, first, I am not a fan of mustache style template[ mustache style template](https://mustache.github.io/), I always feel confused about when to use single curly braces and double curly braces; second, the project diretory of Angular reminds Android project directory, which is not my type; third, in this project, all I need is to implement single page web application, Angualr.js is way to huge for me. In sum, I choose **React**.

### What alternative frameworks did you consider?
The alternative framework I considered is Vue.js. I've been using vue.js for my several projects. It's really small and easy to learn framework and it provides two-way binding which is my favorite part. But from learning and exploration aspects, I want to learn a new framework, **React**.

### What resources did you read/watch/listen to?
At the beginning, I read the official document of [React](https://reactjs.org/docs/getting-started.html), then search bunch of blog on the Internet, I list some important references in the **References section** below. In this project, I use Firebase as my database, and I read the document of firebase. The resources below are the list:
- React
- Firebase
- Bootstrap

### Describe your project. What does it do? What components or features of the framework did you explore for this project?
In this project, I made a voting system for Nintendo switch games. I created a component file, src/Components/games.js, to render the component contents. Furthermore, I adopted Firebase as my real-time database and used state and props to cache the data. Once the data chaged, I used setState to update the content, instead to reload the whole page.


## Screenshots
The screenshot of homepage:
![](https://i.imgur.com/tW9THnO.jpg)
The screenshot fo firebase datareal-time database:
![](https://i.imgur.com/nvwWfIx.png)


## References
- React onClick function:
    - https://upmostly.com/tutorials/react-onclick-event-handling-with-examples


- Fetch API:
    - https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
    - https://www.robinwieruch.de/react-fetching-data

- Firebase
    - https://www.zcfy.cc/article/how-to-create-a-reddit-clone-using-react-and-firebase-mdash-sitepoint
    - https://medium.com/tomsnote/%E4%BD%BF%E7%94%A8firebase%E4%BD%9C%E7%82%BAreact%E7%9A%84%E8%B3%87%E6%96%99%E5%BA%AB-b61af2333526
    - https://kanboo.github.io/2017/12/26/Firebase-studynotes/

- The differences between React and React Native
    - https://www.cognitiveclouds.com/insights/what-is-the-difference-between-react-js-and-react-native/
