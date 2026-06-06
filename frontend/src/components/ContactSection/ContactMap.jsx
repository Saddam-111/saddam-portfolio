import { Card, Badge, SectionHeader } from "../Common";

const ContactMap = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Location"
          title="Based in Jhansi, India"
          subtitle="Open to remote work and collaborations worldwide."
          align="center"
        />

        <Card className="rounded-xl overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="text-primary text-xl mt-1">
              <span className="text-2xl">📍</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary text-lg">Jhansi, Uttar Pradesh, India</h3>
              <p className="text-text-secondary text-sm mt-1">
                Available for remote work and open to relocation opportunities.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="primary" dot>Remote Ready</Badge>
                <Badge variant="default">IST Timezone</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactMap;
