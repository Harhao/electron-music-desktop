import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/music"
    },
    {
      path: "/",
      name: "index",
      component: require("@/components/Index").default,
      children: [
        {
          path: "/music",
          name: "music",
          component: require("@/components/Music").default,
          children: [
            {
              path: "featured",
              name: "featured",
              component: require("@/components/Music/component/featured.vue")
                .default
            },
            {
              path: "rank",
              name: "rank",
              component: require("@/components/Music/component/rank.vue")
                .default
            },
            {
              path: "singer",
              name: "singer",
              component: require("@/components/Music/component/singer.vue")
                .default
            },
            {
              path: "category",
              name: "category",
              component: require("@/components/Music/component/category.vue")
                .default
            },
            {
              path: "album",
              name: "album",
              component: require("@/components/Music/component/album.vue")
                .default
            },
            {
              path: "sound",
              name: "sound",
              component: require("@/components/Music/component/sound.vue")
                .default
            }
          ]
        },
        {
          path: "/video",
          name: "video",
          component: require("@/components/Video/index.vue").default,
          children: [
            {
              path: "recommend",
              name: "recommend",
              component: require("@/components/Video/component/recommend.vue")
                .default
            },
            {
              path: "leaderboard",
              name: "leaderboard",
              component: require("@/components/Video/component/leaderboard.vue")
                .default
            },
            {
              path: "videolibrary",
              name: "videolibrary",
              component: require("@/components/Video/component/videolibrary.vue")
                .default
            }
          ]
        },
        {
          path: "/broadcast",
          name: "broadcast",
          component: require("@/components/BroadCast/index.vue").default
        },
        {
          path: "/download",
          name: "download",
          component: require("@/components/Download/index.vue").default,
          children:[
            {
              path: "localsong",
              name: "localsong",
              component: require("@/components/Download/component/localsong.vue")
                .default
            },
            {
              path: "downloadsong",
              name: "downloadsong",
              component: require("@/components/Download/component/downloadsong.vue")
                .default
            },
            {
              path: "downloadvideo",
              name: "downloadvideo",
              component: require("@/components/Download/component/downloadvideo.vue")
                .default
            },
            {
              path: "pending",
              name: "pending",
              component: require("@/components/Download/component/pending.vue")
                .default
            }
          ]
        },
        {
          path: "/history",
          name: "history",
          component: require("@/components/History/index.vue").default
        },
        {
          path: "/listen",
          name: "listen",
          component: require("@/components/Listen/index.vue").default
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: require("@/components/Login").default
    }
  ]
});
