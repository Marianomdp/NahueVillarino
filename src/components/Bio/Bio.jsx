import React from "react";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio-container" style={{ minHeight: "82vh" }}>
      <h1> Biography</h1>
      <div className="bio-in">
        <p>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab provident
          libero qui eius quod sequi dolorum vero, vitae, iste soluta sed
          impedit delectus voluptatem id inventore natus nobis laboriosam
          temporibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Vero ex at quo, similique quasi eum cupiditate nisi soluta non magni
          eveniet aliquam animi adipisci aut officia! Voluptates praesentium
          maxime libero! Iusto hic provident dolore! Eius nam rem quas
          voluptatem, delectus impedit illo saepe numquam commodi animi vel
          maxime iusto corporis placeat veniam harum porro officia corrupti.
          Magni, deleniti? Nam, obcaecati! Molestias dolorem recusandae vero
          explicabo autem error repellat provident sint in similique, voluptatem
          omnis nisi incidunt consequatur rem praesentium dolorum aliquam quas
          repellendus. Ipsa illo laboriosam beatae sit recusandae odio!
          Cupiditate quasi dicta illo vero maxime ipsum accusamus possimus eos
          fuga porro numquam esse beatae ducimus blanditiis quod veniam ipsa
          delectus, incidunt libero suscipit nisi repellat impedit. Ut,
          recusandae sed? Velit ab magni commodi officiis excepturi adipisci
          blanditiis maiores maxime pariatur, harum voluptatibus nam culpa
          assumenda sapiente aliquid at facere debitis dolorum sit atque
          quisquam consequatur illum eveniet exercitationem. Expedita.
        </p>
        <br />
        <br />
        <img
          className="img-bio"
          src="https://res.cloudinary.com/dnj3a7mfg/image/upload/v1687879054/NGF_2732_u37ram.jpg"
          alt="Nahuel Villarino"
        />
      </div>
    </div>
  );
};

export default Bio;
