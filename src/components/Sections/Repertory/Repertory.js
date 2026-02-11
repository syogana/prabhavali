import { Heading2 } from "@/components/Typography/Typography";
import { Paragraph } from "@/components/Typography/Typography";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Stack from "@/components/Stack/Stack";

export default function Repertory() {
  const repertoryImages = [
    {
      src: "/images/repertory1.jpg",
      alt: "Pravhavali repertory image one",
    },
    {
      src: "/images/repertory2.jpg",
      alt: "Pravhavali repertory image two",
    },
    {
      src: "/images/repertory3.jpg",
      alt: "Pravhavali repertory image three",
    },
  ];

  return (
    <section>
      <Stack size="md">
        <Heading2>PRABHĀVALĪ REPERTORY</Heading2>
        <Paragraph size="base">
          The Prabhāvalī Repertory, founded and artistically directed by K.H.
          Kanna, is a professional Bharata Natyam ensemble based in Canada.
          Taking formal shape in 2025, the company emerged from a collective of
          dancers seeking sustained artistic engagement beyond the arangetram.
          Artists committed to deepening their practice through rigorous
          rehearsal, repertory development, and performance. The company is
          comprised of dancers hailing from diverse training backgrounds and
          institutions, bringing with them distinct lineages, stylistic
          influences, and embodied histories. Within the repertory company,
          these varied experiences converge into a shared aesthetic grounded in
          discipline, integrity, and care. Prabhāvalī Arts offers a rare
          platform for dancers who wish to continue their artistic growth beyond
          traditional milestones, fostering long-term creative inquiry and
          professional development within the classical form. While Prabhāvalī
          Arts also encompasses an educational arm, the repertory company stands
          at the heart of its artistic vision. The ensemble is dedicated to the
          creation and presentation of both traditional repertoire and original
          choreographic works, approached with reverence for lineage and a
          commitment to contemporary relevance within the Canadian dance
          landscape. The name Prabhāvalī refers to the ornate arch that frames
          sacred imagery in South Asian art, symbolizing the sanctity of what it
          surrounds. In this spirit, the Prabhāvalī Arts Repertory Company
          serves as a sanctuary for serious artistic pursuit—where excellence is
          cultivated with dignity, and where both artists and audiences are
          invited into deeply considered, aesthetically rigorous encounters with
          Bharatanatyam.
        </Paragraph>

        <ImageGallery images={repertoryImages} />
      </Stack>
    </section>
  );
}
