const { Card, CardContent } = require("../ui/card");

const SeminarSection = () => {
  return (
    <section className="pad-x">
      <Card className="md:py-8 py-6">
        <CardContent>
          <div className="text-center md:space-y-8 space-y-4">
            <h1 className="text-primary font-bold md:text-4xl text-xl">
              Segera Hadir!
            </h1>
            <p>
              <span className="font-semibold">Seminar Eksklusif,&nbsp;</span>
              menghadirkan pembicara terkemuka dan topik yang menarik pastinya!
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SeminarSection;
