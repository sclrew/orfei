import { defineStore } from 'pinia'
// import connectSiteDescription from "../service/siteDescription"

// const {  theSiteDesc, loadingSiteDescriptionFromDB  } = connectSiteDescription()

export const useStore = defineStore({
  id: 'Language',
  state: () => ({
    theLang: 'Heb',
    siteDesc: [],
    sitePath: 'http://localhost:3000', // 'https://dr-beauty.org.il'
    piniaArticles: [],
  }),
  
  actions: {
    
    toHebrew(){
      this.theLang = 'Heb';
    },

    toRus(){
      this.theLang = 'Rus'
    },

    saveArticleToPinia(newArticle){

        this.piniaArticles.push(newArticle)

    }

  },
  getters: {

  }
  }
)