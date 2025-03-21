// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// const SettingsModal = ({ show, handleClose, handleSave }) => {
//     const [settings, setSettings] = useState({
//         currency: 'USD',
//         theme: 'light',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setSettings({
//             ...settings,
//             [name]: value,
//         });
//     };

//     const onSave = () => {
//         handleSave(settings);
//         handleClose();
//     };

//     return (
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Settings</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="formCurrency">
//                         <Form.Label>Currency</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="currency"
//                             value={settings.currency}
//                             onChange={handleChange}
//                         >
//                             <option value="USD">USD</option>
//                             <option value="EUR">EUR</option>
//                             <option value="GBP">GBP</option>
//                         </Form.Control>
//                     </Form.Group>
//                     <Form.Group controlId="formTheme">
//                         <Form.Label>Theme</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="theme"
//                             value={settings.theme}
//                             onChange={handleChange}
//                         >
//                             <option value="light">Light</option>
//                             <option value="dark">Dark</option>
//                         </Form.Control>
//                     </Form.Group>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close
//                 </Button>
//                 <Button variant="primary" onClick={onSave}>
//                     Save Changes
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default SettingsModal;


import React from 'react';

const SettingsModal = ({ isSettingsOpen, toggleSettings, settings, setSettings }) => {
  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  return (
    <div className={`modal ${isSettingsOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Settings</h2>
        <label>
          Percentage Calculation Method:
          <select name="percentageMethod" value={settings.percentageMethod} onChange={handleChange}>
            <option value="method1">Method 1</option>
            <option value="method2">Method 2</option>
          </select>
        </label>
        <button onClick={toggleSettings}>Close</button>
      </div>
    </div>
  );
};

export default SettingsModal;