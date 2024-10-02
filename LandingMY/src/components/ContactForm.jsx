import { forwardRef, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { InlineWidget } from "react-calendly";
import jsPDF from "jspdf";
import Logo from "../assets/Logo.png"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = forwardRef(({ quoteData }, ref) => {
  const { t } = useTranslation();
  const { option1, option2, option3, totalCost } = quoteData || {};
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [showModal, setShowModal] = useState(false);

  const description = `
    Tipo De Página: ${option1 || "Item no Seleccionado"}, 
    Hosting: ${option2 || "Item no Seleccionado"}, 
    Integraciones: ${
      option3?.length > 0 ? option3.join(" -- ") : "Item no Seleccionado"
    }, 
    Costo total: $${totalCost || "Item no Seleccionado"}`;

  const formRef = useRef(null);

  const handleBack = () => {
    window.location.reload();
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a5",
    });
    const date = new Date().toLocaleDateString();

    // Cargar el logo de manera asíncrona
    const logo = new Image();
    logo.src = Logo;

    logo.onload = () => {
      doc.addImage(logo, "PNG", 15, 20, 35, 10); // Cambiar tamaño del logo a 40x20 mm

      // Agregar fecha más abajo, separado del logo
      doc.setFontSize(10);
      doc.setTextColor(128, 128, 128); // Color gris
      doc.text(`Fecha: ${date}`, 110, 40); // Ajustar la posición vertical (Y) a 40 mm

      // Título
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0); // Color negro
      doc.text("Formulario de Contacto", 10, 60); // Ajustar la posición vertical a 60 mm

      // Detalles del presupuesto, desplazados hacia abajo
      doc.setFontSize(10);
      doc.text(`Tipo De Página: ${option1 || "Item no Seleccionado"}`, 10, 70);
      doc.text(`Hosting: ${option2 || "Item no Seleccionado"}`, 10, 80);
      doc.text(
        `Integraciones: ${
          option3?.length > 0 ? option3.join(", ") : "Item no Seleccionado"
        }`,
        10,
        90
      );
      doc.text(`Costo total: $${totalCost || "Item no Seleccionado"}`, 10, 100);

      // Pie de página
      doc.setFontSize(8);
      doc.text(
        "*Cotización basada en tu selección, comunícate con nosotros para solicitar una Demo.",
        10,
        140
      );

      // Guardar el PDF
      doc.save("cotizacion.pdf");
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData);

    formValues.description = description;

    try {
      const response = await fetch(
        "https://landinginnoweb.onrender.com/emails/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      if (response.ok) {
        handleDownloadPDF();
        toast.success("Formulario enviado con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "#FF8C00", color: "#fff" }, // Naranja
        });
      } else {
        toast.error("Error al enviar el formulario", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "#FF8C00", color: "#fff" }, // Naranja
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar el formulario", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: { backgroundColor: "#FF8C00", color: "#fff" }, // Naranja
      });
    }
  };

  const handleCalendlyClick = () => {
    console.log("Abriendo Calendly...");
    setShowModal(true);
    console.log("showModal después de setShowModal: ", showModal);
  };

  return (
    <div ref={ref} className="">
    <ToastContainer />
      <div className="w-full  dark:bg-slate-800 flex flex-col items-center mb-5 p-3 md:p-30">
        <h2 className="text-[20px] font-bold items-center  p-2 text-white ">
          {t("ContactForm.title")}
        </h2>
      </div>
      {alertMessage && (
        <div
          className={`p-4 mb-4 text-sm ${
            alertType === "success"
              ? "text-green-700 bg-green-100"
              : "text-red-700 bg-red-100"
          } rounded-lg`}
          role="alert"
        >
          {alertMessage}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full bg-white  p-8 xl:p-20 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="firstName"
          >
            {t("ContactForm.firstName")}
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="lastName"
          >
            {t("ContactForm.familyname")}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            {t("ContactForm.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            {t("ContactForm.phone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="comentario"
          >
            {t("ContactForm.comentario")}
          </label>
          <input
            id="comentario"
            name="comentario"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            {t("ContactForm.description")}
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            readOnly
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full mb-5 py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {t("ContactForm.downloadPdf")}
          </button>
          <button
          onClick={handleBack}
          className="w-full py-2 px-4 bg-gray-300 text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {t("ContactForm.back")}
        </button>
        </div>
        <div className="md:col-span-2">
          <button
            type="button"
            onClick={handleCalendlyClick}
            className="w-full mb-5 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
          >
            {t("ContactForm.agendaConsulta")}
          </button>
        </div>
      
      </form>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-4">Agenda tu consulta</h2>
            <InlineWidget url="https://calendly.com/innowebsolutionsdev/30min" />
            <button
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

ContactForm.propTypes = {
  quoteData: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.arrayOf(PropTypes.string),
    totalCost: PropTypes.number,
  }),
  onBack: PropTypes.func,
};

ContactForm.displayName = "ContactForm";

export default ContactForm;
