import styles from "../../styles/home.module.css";
import Image from "next/image";

const testimonials = [
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/images/testimonial-1.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection}>
      {/* HEADER */}
      <div className={styles.testimonialHeader}>
        <span className={styles.sectionTag}>Testimonials</span>
        <h2>
          Hear What They <br /> Say About Us.
        </h2>
      </div>

      {/* CARDS */}
      <div className={styles.testimonialTrack}>
        {testimonials.map((item, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.testimonialImage}>
              <Image
                src={item.image}
                alt={item.name}
                width={320}
                height={200}
              />
            </div>

            <div className={styles.testimonialContent}>
              <h4>{item.name}</h4>
              <span>{item.company}</span>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS (visual only) */}
      <div className={styles.testimonialControls}>
        <button>←</button>
        <button>→</button>
      </div>
    </section>
  );
}
