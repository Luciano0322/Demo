import React, { useCallback, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Adduser () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [cnname, setCnname] = useState('');
    const [enname, setEnname] = useState('');
    const [sex, setSex] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);

    const onNewCnnameChange = useCallback(
        (e) => {
          setCnname(e.target.value);
        },
        []
      );
    const onNewEnnameChange = useCallback(
        (e) => {
          setEnname(e.target.value);
        },
        []
      );
    const onNewSexChange = useCallback(
        (e) => {
          setSex(e.target.value);
        },
        []
      );
    const onNewPhoneChange = useCallback(
        (e) => {
          setPhone(e.target.value);
        },
        []
      );
    const onNewEmailChange = useCallback(
        (e) => {
          setEmail(e.target.value);
        },
        []
      );
    const formSubmitted = useCallback(
        (e) => {
          e.preventDefault();
          if(!cnname.trim() && sex.trim() && phone.trim() && email.trim()) return;
          setUsers([
            {
              id: users.length ? users[0].id + 1 : 1,
              cnname: cnname,
              enname: enname,
              sex: sex,
              phone: phone,
              email: email,
            },
            ...users
          ]);
          setCnname('')
          setEnname('')
          setSex('')
          setPhone('')
          setEmail('')
        },
        [cnname, enname, sex, phone, email, users],
      );

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
        新增人員
      </Button>
        <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>
            新增人員
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={formSubmitted}>
            <div className="form-group">
                <label htmlFor="cnname">中文姓名:</label>
                <input
                className="form-control"
                id="cnname"
                name="cnname"
                value={cnname}
                onChange={onNewCnnameChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="enname">英文姓名:</label>
                <input
                className="form-control"
                id="enname"
                name="enname"
                value={enname}
                onChange={onNewEnnameChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="sex">性別:</label>
                <input
                className="form-control"
                id="sex"
                name="sex"
                value={sex}
                onChange={onNewSexChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">電話:</label>
                <input
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={onNewPhoneChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">電子郵件:</label>
                <input
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onNewEmailChange}
                />
            </div>
            <button className="btn btn-success">送出</button>
        </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default Adduser
