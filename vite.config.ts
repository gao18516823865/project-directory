import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
const config = loadEnv(mode, './')

  return {
    plugins: [
      vue(),
      ElementPlus({}),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
    ],
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@views': '/src/views',
        '@router': '/src/router',
        '@store': '/src/store',
        '@utils': '/src/utils',
        '@api': '/src/utils/api',
        '@assets': '/src/assets',
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    assetsIncludes: [
      'src/assets/fonts',
      'src/assets/images',
      'src/assets/icons',
      'src/assets/scss',
    ],
    server:{
      port:4000,
      force: true,// 依赖预构建 设置为 true 强制使依赖预构建
      hmr: true,// 启用热更新
      proxy: {
        '/api': {
          target: config.VITE_BASIC_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
          secure: false
        }
      }
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
          // 给导入的路径最后加上 ; 
          additionalData: '@import "./src/assets/scss/var.scss";',
          includePaths: [
            'node_modules',
            'src/assets/scss',
          ]
        }
      }
    }
  }
})
