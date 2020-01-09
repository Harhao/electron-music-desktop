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
          name: "player:video",
          component: require("@/components/Video/index.vue").default
        },
        {
          path: "/broadcast",
          name: "player:broacast",
          component: require("@/components/Broadcast/index.vue").default
        },
        {
          path: "/download",
          name: "player:download",
          component: require("@/components/Download/index.vue").default
        },
        {
          path: "/history",
          name: "player:history",
          component: require("@/components/History/index.vue").default
        },
        {
          path: "/listen",
          name: "player:listen",
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
