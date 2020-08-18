<template>
  <div class="agent-list">
    <div class="sidebar">
      <h3>Add a new agent</h3>
      <form v-on:submit.prevent="newAgent()">
        <input type="text" v-model="agent.name" required />
        <input type="text" v-model="agent.location" required />
        <button>New</button>
      </form>
    </div>
    <div class="main">
      <h3>List</h3>
      <div v-for="agent in agents" :key="agent.id">
        <p>{{agent.name}} | {{agent.location}}</p>
       <!-- */ <a href="#" class="btn btn-info" @click="updateAgent(agent.id)">Update</a>-->
        <a href="#" class="btn btn-warning" @click="deleteAgent(agent)">Delete</a>
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
  firestore(){
    // Get agents from collection
    return {
      agents: db.collection('agents'),
    }
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
    // Update agent
    //**************************************************
    updateAgent() {

    },
    //**************************************************
    // Delete from agents database
    //**************************************************
    deleteAgent(doc) {
      this.$firestore.agents.doc(doc.id).delete()

    }
  },
  beforeMount() {
  }
};
</script>


<style scoped>
.agent-list {
  display: flex;
}

.sidebar {
  overflow: hidden;
  height: 100vh;
  min-width: 200px;
  max-width: 20%;
  text-align: center;
  padding: 15px 25px;
  margin-right: 10px;
}

.main {
  flex: 1;
  padding: 0px 35px;
}
</style>