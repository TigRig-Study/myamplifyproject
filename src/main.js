import { createApp } from 'vue'
import App from './App.vue'
import API from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub'
import awsconfig from './aws-exports'

API.configure(awsconfig)
PubSub.configure(awsconfig)

const app = createApp(App)
app.mount('#app')
