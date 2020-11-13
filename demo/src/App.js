import React, { useCallback, useState, useEffect } from 'react';
import Adduser from './components/Adduser';
import Outputlist from './components/Outputlist';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const App = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [cnname, setCnname] = useState('');
  const [enname, setEnname] = useState('');
  const [sex, setSex] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([
    {
      id: 0,
      cnname: '邱小甘',
      enname: 'Peter',
      sex: '男',
      phone: '',
      email: '',
    },
    {
      id: 1,
      cnname: '蔡凡昕',
      enname: 'Allen',
      sex: '男',
      phone: '',
      email: '',
    },
    {
      id: 1,
      cnname: '趙雪瑜',
      enname: 'Sharon',
      sex: '男',
      phone: '',
      email: '',
    },
    {
      id: 1,
      cnname: '賴佳蓉',
      enname: 'Yoki',
      sex: '女',
      phone: '',
      email: '',
    }
  ]);

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

  useEffect(() => {
    console.log('users',users);
  }, [users]);

  // const editUser = useCallback(
  //   (user, index) => (e) => {
  //     const newUsers = [...users];
  //     newUser.splice(index, 1, {
  //       ...user,
  //     });
  //     setUsers(newUsers);
  //   },
  //   [users],
  // )
  const removeUser = useCallback((user) => (e) => {
    setUsers(users.filter(otherUser => otherUser !== user));
  }, [users]);


  return (
    <div className="p-5">
      <h1 className="mb-3">個人資料表</h1>
      <Button className="mx-2 my-3" variant="primary" onClick={handleShow}>
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
        <div>
          <Table striped bordered hover size="sm">
              <thead>
                  <tr>
                  <th>中文名字</th>
                  <th>英文名字</th>
                  <th>性別</th>
                  <th>手機</th>
                  <th>電子信箱</th>
                  <th><Button variant="primary">修改</Button></th>
                  <th><Button variant="danger">刪除</Button></th>
                  </tr>
              </thead>
              <tbody>
                  {users.map((user, index) => (
                  <tr key={user.id}>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id='tooltip-top'>
                          {user.sex}-<strong>{user.cnname}</strong>-{user.enname}
                        </Tooltip>
                      }
                    >
                    <td>{user.cnname}</td>
                    </OverlayTrigger>
                    <td>{user.enname}</td>
                    <td>{user.sex}</td>
                    <OverlayTrigger trigger="click" placement="right" overlay={
                      <Tooltip id='tooltip-top'>
                        <h3>聯絡方式:{user.phone.split("").splice(4,0,'-').splice(8,0,'-')}</h3>
                      </Tooltip>
                    }>
                    <td>{user.phone}</td>
                    </OverlayTrigger>
                    <td>{user.email}</td>
                    <td><Button variant="primary" onClick={() => setEditShow(true)}>修改</Button></td>
                    <Modal
                      size="lg"
                      show={editShow}
                      onHide={() => setEditShow(false)}
                      backdrop="static"
                      keyboard={false}
                      >
                      <Modal.Header closeButton>
                          <Modal.Title>
                          修改人員
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
                              value={user.cnname}
                              onChange={onNewCnnameChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="enname">英文姓名:</label>
                              <input
                              className="form-control"
                              id="enname"
                              name="enname"
                              value={user.enname}
                              onChange={onNewEnnameChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="sex">性別:</label>
                              <input
                              className="form-control"
                              id="sex"
                              name="sex"
                              value={user.sex}
                              onChange={onNewSexChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="phone">電話:</label>
                              <input
                              className="form-control"
                              id="phone"
                              name="phone"
                              value={user.phone}
                              onChange={onNewPhoneChange}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="email">電子郵件:</label>
                              <input
                              className="form-control"
                              id="email"
                              name="email"
                              value={user.email}
                              onChange={onNewEmailChange}
                              />
                          </div>
                          <button className="btn btn-success">送出</button>
                      </form>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button onClick={() => setEditShow(false)}>Close</Button>
                      </Modal.Footer>
                      </Modal>
                    <td><Button variant="danger" onClick={removeUser(user)}>刪除</Button></td>
                  </tr>
                  ))}
              </tbody>
          </Table>
        </div>
    </div>
 
 );
}
export default App;
