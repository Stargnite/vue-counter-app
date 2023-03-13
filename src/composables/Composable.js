// import { mapFields } from "vuex-map-fields";
import {ref} from 'vue'

const CounterFunctions = () => {
//     ...mapFields({
//       counter: "counter",
//     })
//   }
  function increment() {
      this.$store.commit("increment");
    }

    function decrement() {
      this.$store.commit("decrement");
    }
    function reset() {
      this.$store.commit("reset");
    }

	return {
		increment,
		decrement,
		reset,
	}
}

export default CounterFunctions;