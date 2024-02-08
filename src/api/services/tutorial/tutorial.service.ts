import {
  Content,
  ISliderContentMapper,
  ITutorialResponse,
} from "@/src/interfaces/tutorial/tutorial.interface";
import { apiService } from "../http.service";
import { API } from "@/src/lib/constants";

export const getTutorialService = async (): Promise<
  Array<ISliderContentMapper>
> => {
  // const url = API.tutorial;
  const res = await apiService.get<ITutorialResponse>(
    "/mocks/tutorial/tutorial.mock.json"
  );
  
  const {
    data: {
      carousel: { content },
    },
  } = res;

  const response = content.map(
    (item: Content): ISliderContentMapper => ({
      title: item.title,
      description: item.description,
      id: item.id,
      icon: item.icon.url,
    })
  );
  return response;
};
