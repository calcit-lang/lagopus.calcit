
import { main_$x_ } from "./js-out/lagopus.main.mjs"

main_$x_()

if (import.meta.hot) {
  import.meta.hot.accept('./js-out/lagopus.main.mjs', (main) => {
    main.reload_$x_()
  })
}
