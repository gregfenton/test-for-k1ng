import React from "react";
import "./App.css";
import { useFormik } from 'formik';
//import { Formik, Form } from "formik";

import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

// import DefaultTemplate from "./DefaultTemplate";

// import routes from "../../constants/routes.json";
// import FormTemplate from "../../components/templates/FormTemplate";
// import ControlForm from "../../components/organisms/Control/ControlForm";

function DefaultTemplate({children}) {
  return (<>{children}</>)
}
function ControlAdd() {
  const name = "Adicionar controle";

  return (
    <FormTemplate name={name} goBackPath={"/"}>
      <ControlForm type='add' />
    </FormTemplate>
  );
}

function FormTemplate({ name, children, goBackPath }) {
  return (
    <DefaultTemplate goBackPath={goBackPath} title={name}>
      <Row noGutters className='mt-2'>
        {children}
      </Row>
    </DefaultTemplate>
  );
}

FormTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  goBackPath: PropTypes.string,
};

FormTemplate.defaultProps = {
  goBackPath: null,
};

const ControlForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email Address</label>
      <input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ControlAdd />
      </header>
    </div>
  );
}

export default App;

