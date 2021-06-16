

  <template>
    <div>
    <div>
      <b-button v-b-modal.modal-1>Realizar intercambio</b-button>

      <b-modal id="modal-1" title="BootstrapVue" size="xl">
        <b-container fluid class="bv-example-row">
          <b-row>

          <b-col><b-form-select v-model="selected" :options="options"></b-form-select></b-col>
          <b-col><b-form-select v-model="selected2" :options="options2"></b-form-select></b-col>

          </b-row>
          </b-container>

        <b-container fluid class="bv-example-row">
          <b-row>
            <b-col>
            <div>
          <b-form-text
              id="textarea"
              v-model="text"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
          ></b-form-text>

          <pre class="mt-3 mb-0">{{ text }}</pre>
             </div>
            </b-col>
            <b-col>
        <div>
          <b-form-text
              id="textarea"
              v-model="text2"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
          ></b-form-text>

          <pre class="mt-3 mb-0">{{ text2 }}</pre>
        </div>
            </b-col>
            </b-row>
          </b-container>

        <b-container fluid class="bv-example-row">
          <b-row>
            <b-col>
              <div>
                <b-form-input
                    id="textarea"
                    v-model="text3"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                ></b-form-input>


              </div>
            </b-col>
            <b-col>
              <div>
                <b-form-input
                    id="textarea"
                    v-model="text4"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                ></b-form-input>


              </div>
            </b-col>
          </b-row>
        </b-container>

        <b-container fluid class="bv-example-row">
          <b-row>
            <b-col>
              <b-button >Create</b-button>
            </b-col>
            <b-col>
              <b-button >Cancel</b-button>
            </b-col>
          </b-row>
        </b-container>


      </b-modal>
    </div>

    <div>
      <table striped hover :items="items"></table>
    </div>



</div>
  </template>

<script>
import { apiClient } from "@/apiClient";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      selected: null,

      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' }

      ],
      selected2: null,
      options2: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' }

      ],

      text: 'Sell amount',
      text2: 'Buy amount',
      text3: 'Aqui van las cantidades de sell amount',
      text4: 'Aqui van las cantidades de buy amount'
    }
  },
  mounted:function(){
    this.items.push({ age: 30, first_name: 'Pedro', last_name: 'Gonzalez' })
    var config = {
      headers: {

      }
    };
    apiClient
        .get("rates", config)
        .then(response => {
          console.log(response.data)

        })
        .catch(error => {
          console.log(error)
        });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
