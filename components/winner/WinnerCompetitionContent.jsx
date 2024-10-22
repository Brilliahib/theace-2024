import { PencilRuler, Trophy } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function WinnerCompetitionContent() {
  return (
    <>
      <div className="text-center md:space-y-4 space-y-2 pt-16">
        <h1 className="font-bold md:text-3xl text-xl">Winner Competition</h1>
        <p className="md:text-base text-sm">Para pemenang lomba The Ace 2024</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <Tabs defaultValue="ui/ux" className="w-full pad-x">
          <TabsList className="grid w-full md:grid-cols-3 grid-cols-1 md:mb-8 mb-6">
            <TabsTrigger value="ui/ux">UI/UX Design</TabsTrigger>
            <TabsTrigger value="essay">Essay</TabsTrigger>
            <TabsTrigger value="ctf">Capture The Flag</TabsTrigger>
          </TabsList>
          <TabsContent value="ui/ux">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Trophy className="w-12 h-12 text-primary" />
                    </div>
                    <h1 className="md:text-2xl text-xl font-bold text-center">
                      Juara 1
                    </h1>
                    <div className="text-center space-y-2">
                      <h1 className="text-primary font-bold text-xl">
                        RADIANT
                      </h1>
                      <p>Universitas Brawijaya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Trophy className="w-12 h-12 text-stone-300" />
                    </div>
                    <h1 className="md:text-2xl text-xl font-bold text-center">
                      Juara 2
                    </h1>
                    <div className="text-center space-y-2">
                      <h1 className="text-primary font-bold text-xl">Emsigo</h1>
                      <p>Universitas Brawijaya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Trophy className="w-12 h-12 text-amber-400" />
                    </div>
                    <h1 className="md:text-2xl text-xl font-bold text-center">
                      Juara 3
                    </h1>
                    <div className="text-center space-y-2">
                      <h1 className="text-primary font-bold text-xl">
                        Berkah Team
                      </h1>
                      <p>Universitas Brawijaya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="essay">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Trophy className="w-12 h-12 text-primary" />
                    </div>
                    <h1 className="md:text-2xl text-xl font-bold text-center">
                      Juara 1
                    </h1>
                    <div className="text-center space-y-2">
                      <h1 className="text-primary font-bold text-xl">
                        KONCONE KAK GEM
                      </h1>
                      <p>Universitas Negeri Semarang</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Trophy className="w-12 h-12 text-stone-300" />
                    </div>
                    <h1 className="md:text-2xl text-xl font-bold text-center">
                      Juara 2
                    </h1>
                    <div className="text-center space-y-2">
                      <h1 className="text-primary font-bold text-xl">
                        Angkasa
                      </h1>
                      <p>Institut Teknologi Bandung</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Trophy className="w-12 h-12 text-amber-400" />
                    </div>
                    <h1 className="md:text-2xl text-xl font-bold text-center">
                      Juara 3
                    </h1>
                    <div className="text-center space-y-2">
                      <h1 className="text-primary font-bold text-xl">
                        Electrom
                      </h1>
                      <p>Politeknik Elektronika Negeri Surabaya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="ctf">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <Trophy className="w-12 h-12 text-primary" />
                      </div>
                      <h1 className="md:text-2xl text-xl font-bold text-center">
                        Juara 1
                      </h1>
                      <div className="text-center space-y-2">
                        <h1 className="text-primary font-bold text-xl">
                          every villain is lmao
                        </h1>
                        <p>Institut Teknologi Bandung</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <Trophy className="w-12 h-12 text-stone-300" />
                      </div>
                      <h1 className="md:text-2xl text-xl font-bold text-center">
                        Juara 2
                      </h1>
                      <div className="text-center space-y-2">
                        <h1 className="text-primary font-bold text-md">
                          Dingin, tetapi tetap subuh 🥶 🥶
                        </h1>
                        <p>Universitas Indonesia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <Trophy className="w-12 h-12 text-amber-400" />
                      </div>
                      <h1 className="md:text-2xl text-xl font-bold text-center">
                        Juara 3
                      </h1>
                      <div className="text-center space-y-2">
                        <h1 className="text-primary font-bold text-xl">
                          PETIRngatan Darutat
                        </h1>
                        <p>Binus University</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="w-full">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex md:flex-row flex-col justify-center md:gap-24 gap-4">
                      <div className="space-y-4 flex md:flex-row flex-col justify-center items-center md:gap-6">
                        <PencilRuler className="w-12 h-12 text-primary" />
                        <h1 className="font-bold md:text-2xl text-xl">
                          Best Write Up
                        </h1>
                      </div>
                      <div className="space-y-4">
                        <div className="text-center space-y-2">
                          <h1 className="text-primary font-bold text-xl">
                            shelltatic cabang its
                          </h1>
                          <p>Institut Teknologi Sepuluh November</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
