import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="bg-adadad p-10">
      <header className="bg-zinc-800 p-10">
        <section className="servicios" id="servicios">
          <div className="contenido">
          <h2 className="text-5xl py-4 font-bold text-center">Easy Votes Security</h2>
            <div className="grid grid-cols-3 gap-10">
              <div className="bg-gray-700 p-8 text-center rounded-lg transition duration-300 hover:bg-gray-500">
                <i className="fa-solid fa-code text-5xl mb-4"></i>
                <h3 className="text-white text-xl font-bold mb-2">Aplicación</h3>
                <p className="text-white">Implementar un sistema de gestión innovador destinado a proporcionar a las instituciones educativas una plataforma integral que facilite la realización de votaciones seguras y eficientes, al mismo tiempo que garantice un riguroso control de todas las actividades del gobierno escolar.</p>
              </div>
              <div className="bg-gray-700 p-8 text-center rounded-lg transition duration-300 hover:bg-gray-500">
                <i className="fa-solid fa-object-group text-5xl mb-4"></i>
                <h3 className="text-white text-xl font-bold mb-2">Diseño</h3>
                <p className="text-white">El desarrollo contará con una arquitectura de sistema que satisfaga los componentes de software y una interfaz de usuario acorde con los requisitos predefinidos, tanto funcionales como no funcionales.</p>
              </div>
              <div className="bg-gray-700 p-8 text-center rounded-lg transition duration-300 hover:bg-gray-500">
                <i className="fa-solid fa-circle-question text-5xl mb-4"></i>
                <h3 className="text-white text-xl font-bold mb-2">Soporte</h3>
                <p className="text-white">Ofrezco servicios especializados de soporte y administración para páginas web. Mi enfoque se centra en garantizar un rendimiento óptimo, la resolución eficiente de problemas y la gestión efectiva de contenido.</p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </section>
  );
}

export default Services;