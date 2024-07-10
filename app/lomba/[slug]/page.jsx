import CardDetailLomba from "@/components/card/card-detail-lomba";
import { Card, CardContent } from "@/components/ui/card";

const LombaDetail = () => {
  return (
    <>
      <div className="md:min-h-screen pad-x md:py-40 py-8 space-y-4 flex items-center">
        <CardDetailLomba />
      </div>
      <div className="pad-x md:flex gap-x-8 md:space-y-0 space-y-8">
        <div className="md:w-8/12">
          <Card className="bg-[#182159] md:p-4 p-0 py-4 text-white w-full border-t-4 border-b-8 border-r-8 border-l-8 h-full">
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Deskripsi Lomba</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dicta enim praesentium et ad! Corrupti assumenda commodi
                    aspernatur! Commodi ducimus dolorem minus iste? Neque
                    voluptatem et accusamus ad veniam quisquam assumenda.
                  </p>
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">Syarat</h1>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, asperiores.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, asperiores.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, asperiores.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, asperiores.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-4/12">
          <Card className="bg-[#182159] md:p-4 p-0 py-4 text-white w-full border-t-4 border-b-8 border-r-8 border-l-8">
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl text-center font-bold">Prizepool</h1>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary p-4 w-full text-center rounded-md">
                    <h3 className="text-xl font-semibold">Juara 1</h3>
                    <p className="text-xl font-semibold">Rp 2.000.000</p>
                  </div>
                  <div className="bg-[#182159] border-primary border-2 p-4 w-full text-center rounded-md">
                    <h3 className="text-xl font-semibold">Juara 2</h3>
                    <p className="text-xl font-semibold">Rp 1.000.000</p>
                  </div>
                  <div className="bg-[#182159] border-primary border-2 p-4 w-full text-center rounded-md">
                    <h3 className="text-xl font-semibold">Juara 3</h3>
                    <p className="text-xl font-semibold">Rp 500.000</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LombaDetail;
