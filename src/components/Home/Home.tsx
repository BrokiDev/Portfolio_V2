import { useState } from "react";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

export default function Home({
  handleDarkMode,
}: {
  handleDarkMode: () => void;
}) {
  const [text, setText] = useState(false);
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const handleChangeText = () => {
    setText((text) => !text);
  };

  const handleCloseModal = () => {
    setModalOpen(null);
  };

  const handleOpenModal = (type: string) => {
    setModalOpen(type);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Modal
        content={
          text ? (
            <div>Contact Us</div>
          ) : (
            <div className="w-96 h-96 flex flex-col items-center">
              <div>Contacto</div>
              {/* ... */}
            </div>
          )
        }
        isOpen={modalOpen === "contact"}
        toogleClose={handleCloseModal}
      />

      <Modal
        content={
          text ? (
            <div>Projects</div>
          ) : (
            <div className="w-96 h-96 flex flex-col items-center">
              <div>Proyectos</div>
              {/* ... */}
            </div>
          )
        }
        isOpen={modalOpen === "project"}
        toogleClose={handleCloseModal}
      />

      <Header
        handleChangeText={handleChangeText}
        handleDarkMode={handleDarkMode}
        handleOpenModal={handleOpenModal}
        boxSvgTextLogo={"Logo"}
        boxSvgTextProject={text ? "Projects" : "Proyectos"}
        boxSvgTextContact={text ? "Contact" : "Contacto"}
      />

      <div className="flex justify-around items-center flex-col sm:flex-row gap-3 m-4 sm:m-20">
        <div className="border border-black p-6 sm:p-24">
          <img
            className="w-full h-full object-cover"
            src="/image_me.jpg"
            alt="IMG Background"
          />
        </div>
        <div className="border border-black p-6 sm:p-20 ">
          {text ? (
            <h1 className="dark:text-white text-lg sm:text-xl">
              Self-taught, highly motivated and oriented Full Stack student
              achieve excellent results in the development sector Web, I am
              interested in developing myself as a professional in the area and
              I am looking for opportunities and experiences that allow me to do
              so. I have worked with technologies like HTML, CSS, SASS,
              JAVASCRIPT, PHP, PYTHON. Some of them are not my forte but the
              experience or the project requires them I can further strengthen
              my knowledge.
            </h1>
          ) : (
            <h1 className="dark:text-white text-lg sm:text-xl">
              Estudiante Full Stack autodidacta, altamente motivado y orientado.
              lograr excelentes resultados en el sector del desarrollo web, soy
              Interesado en desarrollarme como profesional en el área. y busco
              oportunidades y experiencias que me permitan para hacerlo. He
              trabajado con tecnologías como HTML, CSS, SASS, JAVASCRIPT, PHP,
              PYTHON. Algunos de ellos no son mi fuerte pero sí los experiencia
              o el proyecto los requiere puedo fortalecer aún más mi
              conocimiento.
            </h1>
          )}
          {text ? (
            <a
              target="_blank"
              href="/CVBryantEnglish.pdf"
              className="flex items-center justify-center mt-6 border bg-black  mx-auto dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white py-2 px-4 rounded-full"
            >
              Download CV
            </a>
          ) : (
            <a
              target="_blank"
              href="/CVBryanRamirez.pdf"
              className="flex items-center justify-center mt-6 border bg-black  mx-auto dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white py-2 px-4 rounded-full"
            >
              Descargar Curriculum
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center">
        {text ? (
          <h1 className="dark:text-white text-lg sm:text-xl mt-4">Techs</h1>
        ) : (
          <h1 className="dark:text-white text-lg sm:text-xl mt-4">
            Tecnologias
          </h1>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-4">
          <div className="border border-black p-4">
            <img src="/icon_HTML.svg" alt="" />
          </div>
          <div className="border border-black p-4">
            <img src="/icon_CSS.svg" alt="" />
          </div>
          <div className="border border-black p-4">
            <img src="/icon_JS.svg" alt="" />
          </div>
          <div className="border border-black p-4">
            <img src="/icon_TS.svg" alt="" />
          </div>
          <div className="border border-black p-4">
            <img src="/icon_react.svg" alt="" />
          </div>
          <div className="border border-black p-4">
            <img src="/icon_nodeJS.svg" alt="" />
          </div>

          <div className="border border-black p-4">
            <img src="/icon_mongoDB.svg" alt="" />
          </div>

          <div className="border border-black p-4">
            <img src="/icon_sql.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
