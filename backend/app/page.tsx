import axios from "axios";
import { Jockey_One } from "next/font/google";

const getUserData = async () => {
  await new Promise((r)=>{setTimeout(r,500)})
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
};




export default async function home(params: any) {
  const userDetails = await getUserData();
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex justify-center"> 
          <div className="border p-8 rounded">
            <div> {userDetails.name} </div>
            <div> {userDetails.email} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

