<template>
  <div class="agent-list container">
    <div class="sidebar">
      <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Add a new agent</div>
        <div class="card-body">
          <form v-on:submit.prevent="newAgent()">
            <div class="form-group">
              <label for="name">Name</label>
              <input class="form-control" type="text" id="name" v-model="agent.name" required />
              <label for="company">Company</label>
              <input class="form-control" id="company" type="text" v-model="agent.company" required />
              <label for="location">Location</label>
              <input
                class="form-control"
                id="location"
                type="text"
                v-model="agent.location"
                required
              />
            </div>
            <div class="form-group">
              <button class="btn btn-info">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="main">
      <div v-for="agent in agents" :key="agent.id">


<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <div v-if="agent.img">
              <img class="card-img" :src="agent.img" />
            </div>
            <div v-else>
              <img class="card-img" src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433__480.png" />
            </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{agent.name}}</h5>
        <p class="card-text">{{agent.description}}</p>
        <p class="card-text"><small class="text-muted"> {{agent.location}}</small></p>
        
        <router-link :to="{name: 'Edit', params: { id: agent.id }}" class="btn btn-info mr-2">Edit</router-link>
         <button href="#" class="btn btn-warning mr-2" @click="deleteAgent(agent)">Delete</button>
      </div>
    </div>
  </div>
</div>

       
      

        <div class="form-group">
          
        
         
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import { fb, db } from "@/firebase";

export default {
  name: "AgentList",
  data() {
    return {
      agents: [],
      agent: {
        name: "",
        location: ""
      }
    };
  },
  firestore() {
    // Get agents from collection
    return {
      agents: db.collection("agents")
    };
  },

  methods: {
    //**************************************************
    // Add new agent to database
    //**************************************************
    newAgent() {
      db.collection("agents")
        .add(this.agent)
        .then(docRef => {
          console.log("written" + this.agent.name);
        })
        .catch(err => {
          console.log(err);
        });
    },

    //**************************************************
    // Delete from agents database
    //**************************************************
    deleteAgent(doc) {
      this.$firestore.agents.doc(doc.id).delete();
    }
  },
  beforeMount() {}
};
</script>


<style scoped>
.agent-list {
  display: flex;
}
.agent-card {
  max-width: 100%;
  border-radius: 2px;
  border: 1px solid lightgray;
  box-shadow: 0px 2px 0px gray;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
/* .agent-thumbnail {
  height: 100px;
  width: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  border-radius: 5px;
}
.agent-thumbnail img {
  transition: 2s;
  height: 150%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
} */
.agent-thumbnail img {background-color: #b2eae8;
  padding: 16px;
  object-fit: contain;
  height: 214px;
  width: 100%;} 

.agent-content {
  width: 100%;
}
.sidebar {
  overflow: hidden;
  height: 100vh;
  min-width: 250px;
  max-width: 40%;
  text-align: center;
  padding: 15px 25px;
  margin-right: 10px;
}

.main {
  flex: 1;
  padding: 0px 35px;
}
</style>