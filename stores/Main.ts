import type { UseFetchOptions } from "#app";
import { defineStore } from "pinia";
export const useMainStore = defineStore("main", {
  state: () => ({
    userData: {},
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZThiNzhmNDIyZjg0OTUzNjlmNGU5MDJlMjUzMmIwNmUzYTQyY2QxNTg0OTkxMGVmNzJlYTY2MTc3Y2MyZTE1NWZhZjUyYjc2MTk5ZThlNWUiLCJpYXQiOjE3MjA2NTE0MzAuNTkzMzM1LCJuYmYiOjE3MjA2NTE0MzAuNTkzMzQxLCJleHAiOjE3NTIxODc0MzAuNTY2NjcsInN1YiI6IjE1Iiwic2NvcGVzIjpbXX0.wKFa5vyn617vrlsOCeVLtWsNlAz52qeEQerr328x16dMRYaiYkUolQOYshi43cjGftCGUFFx9gWll_8Nds1Av_lgkVXBBz37nPUqdYp2lI_pMmNabYAZDr44m8_mQeMHSSxulwSL1Z1QfWQa_-lHYVidfeWF4SoZYC9UFAxZEtSg724tGV9CFXyOVoyCZAnSGtPE17iC4uBMtwlAjXxRs94-BHXkUeaNVvEeBXCE2BZXjLPsVdiSb0xFAIAgc2Bo0XG7Y1PmAAawWMrY0HZzb0tLE7Zi33tIsVexDX9qkEcnoEaMziyaWkeXIy_iJoFNUXMZ0DVT6Ky5Wa5-gzzsy6I4HgthVWys5dXZtf8XE3gjZx5R95vXKwWYgDcUX9aBpB2qKoxGLaL3Ccx3zbuJlEmSZCKmwuOOJ_6Ducej6FBHJ3QPx9eeKMkixxPaGJ39YQPmEy5n3cTJhFvj1rHFfrJIrtLOYtC6-1w2xRbfmKbBqezVA0anKAU2EMW_B-nXtAT4ATvySYV-YOlkzSc4qgEl_mhPujfqI9TcQP-37oBs0KY00OSJX-n7B2185x81tk9ZeBAS4TrqFZtT_GEdQkcmlkbcy08sEJYVoKKzyub3UGNjYHkXU21HM0yndBUZ3D6KwV5sYU9GdpeLjMON6VqN6vpEkg1NKmo",
  }),
  actions: {
    async getClientData(id: string) {
      //se utiliza fetch y no axios debido a que la reciente version de nuxt3 no esta soportando el paquete de axios de forma correcta
      const { data, error } = await useFetch(
        `https://pttest.doctorone.com/api/auth/get_data_client?numberId=${id}`,
        {
          method: "POST",
          lazy: true,
          timeout: 9000,
          mode: "no-cors",
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      console.log(data);

      //la respuesta me da un 302 y en postman me redirige como a un formulario asi que simulare la respuesta de un usuario valido y uno invalido

      if (id === "0964360978") {
        return {
          name: "IGOR",
          surname: "LINARES",
          phone: "+558599941533",
          email: "igor.lihnares@hotmail.com",
          numberId: "029.692.303-64",
          company: 130,
          country: "BR",
          pat_tipobase: "",
          created: "2021-07-29T22:31:33.000000Z",
          meetings: [],
        };
      } else {
        return {
          success: 0,
          message: "No existe el paciente",
        };
      }
    },
  },
  getters: {
    getUserData: (state) => {
      return state.userData;
    },
  },
});
