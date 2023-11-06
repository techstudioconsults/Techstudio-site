// import React, {useState, useEffect } from 'react'
// import { NavLink, useLocation } from 'react-router-dom'
// import { Icon } from '@iconify/react'
// import PropTypes from 'prop-types'

// import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content'

// import axios from 'axios'

// import style from './dashboardLeftSideNav.module.scss'

// const DashboardSideNav = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const toast = useToast();

//   const handleOpen = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!inputValue) {
//       showToast("error", "Error", "Please enter a value.");
//       return;
//     }
//     setIsLoading(true);
//     try {
//       await submitForm(inputValue);
//       setInputValue('');
//       handleClose();
//       showToast("success", "Successfully Created", "Your form has been successfully submitted.");
//     } catch (error) {
//       showToast("error", "Error", "An error occurred while submitting the form.");
//     }
//     setIsLoading(false);
//   };

//   const submitForm = async (value) => {
//     try {
//       const response = await axios.post('https://example.com/endpoint', { value });
//       // Replace 'https://example.com/endpoint' with your actual endpoint URL
//       // Handle the response if needed
//     } catch (error) {
//       if (error.response) {
//         const { status, data } = error.response;
//         // Handle specific error responses
//         if (status === 400) {
//           showToast("error", "Error", data.message);
//         } else {
//           showToast("error", "Error", "An error occurred while submitting the form.");
//         }
//       } else {
//         showToast("error", "Error", "An error occurred while submitting the form.");
//       }
//       throw error;
//     }
//   };

//   const showToast = (status, title, description) => {
//     toast({
//       title,
//       description,
//       status,
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//     const handleModalToggle = (nav) => {
//       if (nav.id === 7) {
//         setShowModal(!showModal);
//       }
//     }

//   const { leftStudentNav, leftTeacherNav, leftAdminNav } = DASHBOARD_CONTENT

//   const location = useLocation()
//   const route = location.pathname.split('/')

//   const activeSidebar = (role) => {
//     return location.pathname.includes(role)
//   }

//   const navDisplay = activeSidebar(`tutor`)
//     ? leftTeacherNav.map((nav) => {
//         return (
//           <NavLink
//             id={nav.title}
//             to={nav.link}
//             key={nav.id}
//             className={[style.link].join(' ')}
//           >
//             <li className={style.list}>
//               <div className={style.imgContainer}>
//                 <Icon
//                   width={`1.5rem`}
//                   height={`1.5rem`}
//                   icon={nav.icon}
//                   color={
//                     route[2] === nav.title.toLocaleLowerCase()
//                       ? `white`
//                       : `grey`
//                   }
//                 />
//               </div>
//               <p
//                 className={[
//                   style.title,
//                   route[2] === nav.title.toLocaleLowerCase()
//                     ? `text-white`
//                     : null,
//                 ].join(' ')}
//               >
//                 {nav.title}
//               </p>
//             </li>
//           </NavLink>
//         )
//       })
//     : activeSidebar(`admin`)
//     ? leftAdminNav.map((nav) => {
//         return (
//           <NavLink
//             id={nav.title}
//             to={nav.link}
//             key={nav.id}
//             className={[style.link].join(' ')}
//             onClick={() => handleModalToggle(nav)}

//             data-bs-toggle={showModal && "modal"}
//             data-bs-target={showModal && "#exampleModal"}
//           >
//             <li className={style.list}>
//               <div className={style.imgContainer}>
//                 <Icon
//                   width={`1.5rem`}
//                   height={`1.5rem`}
//                   icon={nav.icon}
//                   color={
//                     route[2] === nav.title.toLocaleLowerCase()
//                       ? `white`
//                       : `grey`
//                   }
//                 />
//               </div>
//               <p
//                 className={[
//                   style.title,
//                   route[2] === nav.title.toLocaleLowerCase()
//                     ? `text-white`
//                     : null,
//                 ].join(' ')}

//               >
//                 {nav.title}
//               </p>
//             </li>
//           </NavLink>
//         )
//       })
//     : leftStudentNav.map((nav) => {
//         return (
//           <NavLink
//             id={nav.title}
//             to={nav.link}
//             key={nav.id}
//             className={[style.link].join(' ')}
//           >
//             <li className={style.list}>
//               <div className={style.imgContainer}>
//                 <Icon
//                   width={`1.5rem`}
//                   height={`1.5rem`}
//                   icon={nav.icon}
//                   color={
//                     route[2] === nav.title.toLocaleLowerCase()
//                       ? `white`
//                       : `grey`
//                   }
//                 />
//               </div>
//               <p
//                 className={[
//                   style.title,
//                   route[2] === nav.title.toLocaleLowerCase()
//                     ? `text-white`
//                     : null,
//                 ].join(' ')}
//               >
//                 {nav.title}
//               </p>
//             </li>
//           </NavLink>
//         )
//       })

//   return (
//     <div className={style.dashboardSideNav}>
//       <div className={style.logoDiv}>
//         <NavLink to={`/`} className={style.imgLogoContainer}>
//           <img
//             src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218509/techstudio-web-app/assets/icons/logo_n9icvi.png`}
//             alt='logo'
//             className='cc-img-fluid'
//           />
//         </NavLink>
//       </div>
//       {/* link nav */}
//       <div className={style.navGroup} >{navDisplay}</div>

//       {/* {showModal && selectedItem && (
//         <ModalComponent
//           selectedItem={selectedItem}
//           onClose={() => {
//             setShowModal(false);
//             setSelectedItem(null);
//           }}
//         />
//       )} */}

// {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button> */}

// <div className="modal fade cc-backdrop" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h3 className="modal-title fs-5" id="exampleModalLabel">Create Spreadsheet</h3>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//       <form>
//   <div class="mb-3">
//     <input type="text" class="form-control" id="create" aria-describedby="createSheet"  placeholder='Create Sheet'/>

//   </div>

//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>

//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         {/* <button type="button" className="btn btn-primary">Save changes</button> */}
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   )
// }

// DashboardSideNav.propTypes = {
//   isTDB: PropTypes.bool,
//   isADB: PropTypes.bool,
// }

// export default DashboardSideNav

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { DASHBOARD_CONTENT } from '../Layout/dashboardLayout/content';
import { toast } from 'react-toastify';
import axios from 'axios';
import style from './dashboardLeftSideNav.module.scss';

const DashboardSideNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.error('Please enter a value.');
      return;
    }
    setIsLoading(true);
    try {
      await submitForm(inputValue);
      setInputValue('');
      handleClose();
      toast.success('Your form has been successfully submitted.', {
        autoClose: 3000,
      });
    } catch (error) {
      toast.error('An error occurred while submitting the form.');
    }
    setIsLoading(false);
  };

  const submitForm = async (data) => {
    try {
      const response = await axios.post('https://api.techstudioacademy.com/api/v1/dashboard/spreadsheet', data);
      console.log(response);
      // Handle the response if needed
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        // Handle specific error responses
        if (status === 400) {
          toast.error(data.message);
        } else {
          toast.error('An error occurred while submitting the form.');
        }
      } else {
        toast.error('An error occurred while submitting the form.');
      }
      throw error;
    }
  };

  const handleModalToggle = (nav) => {
    if (nav.id === 7) {
      setShowModal(!showModal);
    }
  };

  const { leftStudentNav, leftTeacherNav, leftAdminNav } = DASHBOARD_CONTENT;

  const location = useLocation();
  const route = location.pathname.split('/');

  const activeSidebar = (role) => {
    return location.pathname.includes(role);
  };

  const navDisplay = activeSidebar(`tutor`)
    ? leftTeacherNav.map((nav) => {
        return (
          <NavLink
            id={nav.title}
            to={nav.link}
            key={nav.id}
            className={[style.link].join(' ')}
          >
            <li className={style.list}>
              <div className={style.imgContainer}>
                <Icon
                  width={`1.5rem`}
                  height={`1.5rem`}
                  icon={nav.icon}
                  color={
                    route[2] === nav.title.toLocaleLowerCase()
                      ? `white`
                      : `grey`
                  }
                />
              </div>
              <p
                className={[
                  style.title,
                  route[2] === nav.title.toLocaleLowerCase()
                    ? `text-white`
                    : null,
                ].join(' ')}
              >
                {nav.title}
              </p>
            </li>
          </NavLink>
        );
      })
    : activeSidebar(`admin`)
    ? leftAdminNav.map((nav) => {
        return (
          <NavLink
            id={nav.title}
            to={nav.link}
            key={nav.id}
            className={[style.link].join(' ')}
            onClick={() => handleModalToggle(nav)}
            data-bs-toggle={showModal ? 'modal' : ''}
            data-bs-target={showModal ? '#exampleModal' : ''}
            data-bs-backdrop={showModal ? 'false' : ''}
          >
            <li className={style.list}>
              <div className={style.imgContainer}>
                <Icon
                  width={`1.5rem`}
                  height={`1.5rem`}
                  icon={nav.icon}
                  color={
                    route[2] === nav.title.toLocaleLowerCase()
                      ? `white`
                      : `grey`
                  }
                />
              </div>
              <p
                className={[
                  style.title,
                  route[2] === nav.title.toLocaleLowerCase()
                    ? `text-white`
                    : null,
                ].join(' ')}
              >
                {nav.title}
              </p>
            </li>
          </NavLink>
        );
      })
    : leftStudentNav.map((nav) => {
        return (
          <NavLink
            id={nav.title}
            to={nav.link}
            key={nav.id}
            className={[style.link].join(' ')}
          >
            <li className={style.list}>
              <div className={style.imgContainer}>
                <Icon
                  width={`1.5rem`}
                  height={`1.5rem`}
                  icon={nav.icon}
                  color={
                    route[2] === nav.title.toLocaleLowerCase()
                      ? `white`
                      : `grey`
                  }
                />
              </div>
              <p
                className={[
                  style.title,
                  route[2] === nav.title.toLocaleLowerCase()
                    ? `text-white`
                    : null,
                ].join(' ')}
              >
                {nav.title}
              </p>
            </li>
          </NavLink>
        );
      });

  return (
    <div className={style.dashboardSideNav}>
      <div className={style.logoDiv}>
        <NavLink to={`/`} className={style.imgLogoContainer}>
          <img
            src={`https://res.cloudinary.com/dkszgtapy/image/upload/v1686218509/techstudio-web-app/assets/icons/logo_n9icvi.png`}
            alt='logo'
            className='cc-img-fluid'
          />
        </NavLink>
      </div>
      {/* link nav */}
      <div className={style.navGroup}>{navDisplay}</div>

      <div
        className='modal'
        id='exampleModal'
        tabIndex='-1'
        data-bs-backdrop='false'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
        style={{ marginTop: `11rem` }}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h3
                className='modal-title fs-5 text-center mx-auto d-flex justify-content-center align-items-center'
                id='exampleModalLabel'
              >
                Create Spreadsheet
              </h3>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    name='title'
                    aria-describedby='createSheet'
                    placeholder='Title'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary'
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating...' : 'Create'}
                </button>
              </form>
            </div>
            <div className='modal-footer'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardSideNav.propTypes = {
  isTDB: PropTypes.bool,
  isADB: PropTypes.bool,
};

export default DashboardSideNav;  


