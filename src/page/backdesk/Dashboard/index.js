import React ,{useEffect ,useState ,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Sidebar from '../../../components/dashboards/Sidebar';
import Header from '../../../components/dashboards/Header';
import "../../../style/css/dashboard.css"

export default function Dashboard(props) {

  const navigate = useNavigate() ;

  const [show, setShow] = useState(false);

  const [isNew , setIsNew] = useState(false) ;

  const [pId , setPId] = useState("") ;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const openModal = (isNew , item)=>{
    setShow(true)
    setIsNew(isNew)
    if(isNew){
      setTemplate({})
    }else{
      setPId(item.id) 
      setTemplate(item)
    }
  }

  const [template , setTemplate] = useState({
    image : "",
  }) ;



  const nowData = (()=>{
    console.log(template) ;

  })

  // TODO:取得cookie
  const api = `${process.env.REACT_APP_URL}/logout` ;
  const logOut = ()=>{
    axios.post(api)
    .then(res=>{
      if(res.data.success){
        navigate("/manager") ;
      }
    })
  }



  useEffect(()=>{
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    
    axios.defaults.headers.common['Authorization'] = myCookie;

  },[]) ;
  
  const saveForm = (type , value)=>{
    setTemplate({...template , [type] : value})
  }

  // TODO:建立商品
  const addProducts = ()=>{
    console.log(template) ;
    axios
      .post(`${process.env.REACT_APP_URL}/api/${process.env.REACT_APP_NAME}/admin/product` , {data :template})
      .then(res=>{
        console.log(res.data) ;
        props.getProducts() ;
        handleClose() ;
      })
      .catch(err=>{
        console.log(err) ;
      })

  }
  // TODO:修改產品   
  const editProduct = ()=>{
    axios
      .put(`${process.env.REACT_APP_URL}/api/${process.env.REACT_APP_NAME}/admin/product/${pId}` , {data :template})
      .then(res=>{
        console.log(res.data) ;
        props.getProducts() ;
        handleClose() ;
      })
      .catch(err=>{
        console.log(err) ;
      })
  }
  // TODO:刪除產品
  const delProduct = (id)=>{
    axios
      .delete(`${process.env.REACT_APP_URL}/api/${process.env.REACT_APP_NAME}/admin/product/${id}`)
      .then(res=>{
        console.log(res.data) ;
        props.getProducts() ;
        handleClose() ;
      })
      .catch(err=>{
        console.log(err) ;
      })
  }

  const products = props.products ;
  return (
    <div>
      <Header logOut={logOut} />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar/>
          </div>
          <div className="col-md-9">
              <Button onClick={()=>{openModal(true)}} className='btn btn-primary'>新增</Button>
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th width="120">分類</th> 
                    <th>產品名稱</th> 
                    <th width="120">原價</th> 
                    <th width="120">售價</th> 
                    <th width="80">啟用</th> 
                    <th width="100">編輯</th>
                  </tr>
                </thead> 
                <tbody>
                  {
                    products.map(p=>{
                      return <tr key={p.id}>
                          <td>{p.category}</td>
                          <td>{p.title}</td>
                          <td>{p.origin_price}</td>
                          <td>{p.price}</td>
                          <td><input type="checkbox" /></td>
                          <td>
                            <a href="#!" className="btn btn-primary" onClick={()=>{openModal(false , p)}}>編輯</a>
                            <a href="#!" className="btn btn-danger" onClick={()=>{delProduct(p.id)}}>刪除</a>
                          </td>
                        </tr>
                      
                    })
                  }
                </tbody>
              </table>
          </div>
        </div>
      </div>


      {/* TODO: modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="image">輸入圖片網址</label> 
                <input value={template.image} onChange={(e)=>{saveForm("image" , e.target.value)}} type="text" id="image" placeholder="請輸入圖片連結" className="form-control" />
              </div> 
              <div className="form-group">
                <label htmlFor="customFile">或 上傳圖片</label> 
                <input type="file" id="customFile" className="form-control"/></div> 
                  <img alt="" className="img-fluid" />
                </div> 
              <div className="col-sm-8">
                <div className="form-group">
                  <label htmlFor="title">標題</label> 
                  <input value={template.title} onChange={(e)=>{saveForm("title" , e.target.value)}} type="text" id="title" placeholder="請輸入標題" className="form-control" />
                </div> 
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="category">分類</label> 
                    <input value={template.category} onChange={(e)=>{saveForm("category" , e.target.value)}} type="text" id="category" placeholder="請輸入分類" className="form-control" />
                  </div> 
                  <div className="form-group col-md-6"><label htmlFor="price">單位</label> 
                    <input value={template.unit} onChange={(e)=>{saveForm("unit" , e.target.value)}} type="unit" id="unit" placeholder="請輸入單位" className="form-control" />
                  </div>
                </div> 
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="origin_price">原價</label> 
                    <input value={template.origin_price} onChange={(e)=>{saveForm("origin_price" , parseInt(e.target.value))}} type="number" id="origin_price" placeholder="請輸入原價" className="form-control" />
                  </div> 
                  <div className="form-group col-md-6">
                    <label htmlFor="price">售價</label> 
                    <input value={template.price} onChange={(e)=>{saveForm("price" , parseInt(e.target.value))}} type="number" id="price" placeholder="請輸入售價" className="form-control" />
                  </div>
                </div> 
                <hr/> 
                <div className="form-group">
                  <label htmlFor="description">產品描述</label> 
                  <textarea value={template.description} onChange={(e)=>{saveForm("description" , e.target.value)}} type="text" id="description" placeholder="請輸入產品描述" className="form-control"></textarea></div> <div className="form-group"><label htmlFor="content">說明內容</label> <textarea type="text" id="content" placeholder="請輸入產品說明內容" className="form-control"></textarea></div> <div className="form-group"><div className="form-check">  
                </div>
                <p>是否啟用</p>
                <div className="form-group">
                    <label>是</label>
                    <input name="isUse" value={1} onChange={(e)=>{saveForm("is_enabled" , parseInt(e.target.value))}} type="radio"  className="form-check-input"/> 
                </div>
                <div className="form-group">
                    <label>否</label>
                    <input name="isUse" value={0} onChange={(e)=>{saveForm("is_enabled" , parseInt(e.target.value))}} type="radio" className="form-check-input"/> 
                </div>
                
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* TODO:寫筆記 */}
          {
            isNew ?(
              <Button variant="primary" onClick={addProducts}>
                新增產品
              </Button>
            ) : 
            (
              <Button variant="primary" onClick={editProduct}>
                修改產品
              </Button>
            )
          }
          
          <Button variant="secondary" onClick={nowData}>
            now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
