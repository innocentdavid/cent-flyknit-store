import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { FaSearch, FaRegClipboard, FaBars, FaAngleDown, FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa'

export default function Index() {
  const [qntModal, setQntModal] = useState(false)
  const [sizeModal, setSizeModal] = useState(false)
  const [qnt, setQnt] = useState(1)
  const [size, setSize] = useState("S")
  const initialPrice = 299
  const [price, setPrice] = useState(initialPrice)

  const qnts = [1, 2, 3]
  const sizes = [{ s: "S", p: 299 }, { s: "M", p: 310 }, { s: "L", p: 350 }]

  const calcPrice = (qnt, sizes, size) => {
    const selectedSize = sizes.filter(s => s.s == size)
    setPrice(qnt * selectedSize[0].p)
  }

  const [menuModal, setMenuModal] = useState(false)

  const toggleModal = (action) => {
    setMenuModal(action)
    setTimeout(() => {
      const modal = document.querySelector('.modal')
      if(modal){
        modal.style.width = '400px'
      }
    }, 50);
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-[#202124] text-gray-200">
      <Head>
        <title>NTABUCEJO STORE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {menuModal && <div className="modal-container fixed z-10">
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/70 backdrop-blur-[2px]" onClick={() => { toggleModal(false) }}></div>
        <div className="modal transition-all duration-500 fixed top-0 right-0 w-0 h-screen bg-white/30 backdrop-blur-md text-black grid place-items-center">
          <div id="close" className='fixed top-8 right-8 cursor-pointer'>
            <FaTimes size={30} color='#f5c000' onClick={()=>{toggleModal(false)}} />
            </div>
          <div className='text-center'>
            <div className="h-14 font-bold hover:text-[#f5c000] modal-menu-item text-white" onClick={()=>{toggleModal(false)}}>Men</div>
            <div className="h-14 font-bold hover:text-[#f5c000] modal-menu-item text-white" onClick={()=>{toggleModal(false)}}>Women</div>
            <div className="h-14 font-bold hover:text-[#f5c000] modal-menu-item text-white" onClick={()=>{toggleModal(false)}}>Kids</div>
            <div className="h-14 font-bold hover:text-[#f5c000] modal-menu-item text-white" onClick={()=>{toggleModal(false)}}>Accessories</div>
          </div>
        </div>
      </div>}

      <nav className="flex justify-between text-semibold py-6 px-10">
        <div className="navRight flex gap-10">
          <Image src="/images/nike-white.png" alt="" width="60" height="20" className='' />
          <div className="navItems hidden md:flex gap-8">
            <div className="modal-menu-item hover:text-[#f5c000]">Men</div>
            <div className="modal-menu-item hover:text-[#f5c000]">Women</div>
            <div className="modal-menu-item hover:text-[#f5c000]">Kids</div>
            <div className="modal-menu-item hover:text-[#f5c000]">Accessories</div>
          </div>
        </div>
        <div className="navLeft flex gap-10">
          <div className="flex items-center gap-4 mr-[10px] group cursor-pointer">
            <FaSearch />
            <div className="">Search</div>
          </div>
          <div className="relative cursor-pointer">
            <FaRegClipboard size={25} />
            <span className="absolute bottom-0 -right-2 min-w-5 min-h-5 text-[.8rem] py-[2px] px-2 rounded-full bg-[#f5c000] text-black">5</span>
          </div>
          <FaBars size={25} onClick={() => { toggleModal(true) }} />
        </div>
      </nav>

      <main className="flex flex-col md:flex-row w-full items-center pl-10 lg:pl-28">
        <div className="flex-1 font-tw-cen-mt-condensed">
          <p className="text-[#f5c000] tracking-[5px] text-sm">NEW COLLECTION</p>
          <div className="text-white font-bold tracking-[5px] py-7 text-2xl">
            <p className="">NEW NIKE</p>
            <p className="">REACT FLYKNIT</p>
          </div>
          <p className="text-[.9rem] py-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt quasi, soluta natus temporibus recusandae omnis vel est magnam dolorem.
          </p>
          <div className="flex items-center gap-2 pt-5">
            <div className="relative">
              <div className="flex gap-2 border border-gray-400 items-center py-2 px-2 text-sm font-semibold cursor-pointer"
                onClick={() => {
                  setQntModal(!qntModal)
                }}
              >
                <span>QNT {qnt}</span>
                <FaAngleDown color='#f5c000' />
              </div>

              {qntModal && <div className="absolute -bottom-[121px] left-0 w-20 bg-gray-700">
                {qnts.map(qnt => {
                  return (
                    <div className="border-b border-gray-400 h-10 grid place-items-center hover:bg-[#f5c000] hover:text-black
                    "
                      onClick={() => {
                        setQnt(qnt);
                        setQntModal(false);
                        calcPrice(qnt, sizes, size)
                      }}
                    >{qnt}</div>
                  )
                })}
              </div>}
            </div>
            <div className="relative">
              <div className="flex gap-2 border border-gray-400 items-center py-2 px-2 text-sm font-semibold cursor-pointer"
                onClick={() => {
                  setSizeModal(!sizeModal)
                }}
              >
                <span>SIZE {size}</span>
                <FaAngleDown color='#f5c000' />
              </div>

              {sizeModal && <div className="absolute -bottom-[121px] left-0 w-20 bg-gray-700">
                {sizes.map(size => {
                  return (
                    <div className="border-b border-gray-400 h-10 grid place-items-center hover:bg-[#f5c000] hover:text-black
                    "
                      onClick={() => {
                        setSize(size.s);
                        setSizeModal(false);
                        calcPrice(qnt, sizes, size.s)
                      }}
                    >{size.s}</div>
                  )
                })}
              </div>}
            </div>
            <div className="ml-2 py-1 px-3 border-2 border-[#f5c000] text-[#f5c000] font-bold text-lg">${price}</div>
          </div>
        </div>
        <div className="flex-1 lg:flex-[2]">
          <Image src="/images/sneaker.png" alt="" width="900" height="500" className='-rotate-12' />
        </div>
      </main>

      <div className="pl-10 lg:pl-28 flex justify-between items-end">
        <div className="hidden md:flex flex-col justify-center items-center">
          <div className="flex justify-around">
            <div className="cursor-pointer"><Image src="/images/sneaker.png" alt="" width="50" height="50" /></div>
            <div className="cursor-pointer"><Image src="/images/sneaker.png" alt="" width="50" height="50" /></div>
          </div>
          <div className="flex">
            <div className="w-[60px] h-[50px] grid place-items-center bg-gray-700 font-bold text-[#f5c000] cursor-pointer">
              <FaAngleLeft />
            </div>
            <div className="w-[60px] h-[50px] grid place-items-center bg-gray-700 font-bold text-[#f5c000] ml-1 cursor-pointer">
              <FaAngleRight />
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[50px] grid place-items-center bg-gray-700 font-bold text-[#f5c000] cursor-pointer">
          ADD TO CART
        </div>
      </div>
    </div>
  )
}
