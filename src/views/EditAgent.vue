  
<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Update Agent {{agent.name}}</h3>
      <form @submit.prevent="updateAgent(agent)">

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="form-control" v-model="agent.name" required />
        </div>
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" id="company" class="form-control" v-model="agent.company" />
        </div>
<div class="form-group">
          <label for="location">Location</label>
          <input type="text" id="location" class="form-control" v-model="agent.location" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" id="description" class="form-control" v-model="agent.description" />
        </div>
        <div class="form-group">
          <label for="img">Image URL</label>
          <input type="text" id="img" class="form-control" v-model="agent.img" />
        </div>

        

        <div class="form-group">
          <button class="btn btn-primary btn-block">Add Agent</button>
        </div>
        
        <div v-if="msg">
            {{msg}}
            </div>
      </form>
    </div>
  </div>
</template>

<script>
import { fb, db } from "@/firebase";
export default {
  name: "EditAgent",
  data() {
    return {
      agents: [],
      msg: null
    };
  },
  firestore() {
    // Get agents from collection
    return {
      agent: db.collection("agents").doc(this.$route.params.id)
    };
  },
  methods: {
    //**************************************************
    // Update agent
    //**************************************************
    updateAgent(agent) {
      event.preventDefault();
      console.log(agent)
      db.collection('agents').doc(this.$route.params.id).update(agent).then(()=> {
          this.msg = "Updated, awesome!"
      })
    },
  }
};
</script>