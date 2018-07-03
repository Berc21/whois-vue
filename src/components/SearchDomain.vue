<template>
  <div>

    <v-container
    id="input-usage"
    grid-list-xl
    fluid
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-input
          hint="Search for a Domain or IP"
          :success="true"
          append-icon="search"
          validate-on-blur="true"
          :light="true"
        >
         <input type="text" v-model="vSearchModel" @keyup.enter="startChecking" >
        </v-input>

        {{whois.domainname}} -  {{whois.registrydomainid}}

      </v-flex>
    </v-layout>
  </v-container>

   <rotate-square2 v-show="loading"></rotate-square2>

  </div>

</template>

<script>
import checkDomain from "@/service/API";
import { RotateSquare2 } from "vue-loading-spinner";

export default {
  name: "SearchDomain",
  components: {
    RotateSquare2
  },
  data() {
    return {
      text: "",
      vSearchModel: null,
      whois: {
        domainname: null,
        registrydomainid: null
      },
      loading: false,
    };
  },
  methods: {
    startChecking() {
      this.loading = true;
      checkDomain(this.vSearchModel)
        .then(res => res.json())
        .then(res => {
          this.loading = false;
          this.whois.domainname = res["Domain Name"];
          this.whois.registrydomainid = res["Registry Domain ID"];
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #input-usage .v-input__prepend-outer,
#input-usage .v-input__append-outer,
#input-usage .v-input__slot,
#input-usage .v-messages {
  background: red;
} */


</style>
