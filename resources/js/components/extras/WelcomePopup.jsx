import React from 'react';
import AIChat from './AIFrame';
import TikTokEmbed from './TikTokEmbed';
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion';
import CursorFollower from './CursorImg';
import { href } from 'react-router-dom';



export default function WelcomePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  if (!open) return null

  return (
    <div className="auth-modal-overlay-popup" >
        <CursorFollower/>
        <AIChat/>
        <img className='popup-side-image2' src='https://media.tenor.com/5v3pSqZHqb0AAAAM/jeffrey-epstein-agartha.gif'/>
        <img className='popup-side-image2' src=''/>
        <div
            className="auth-modal-content-popup"
            onClick={(e) => e.stopPropagation()}
        >

            <TikTokEmbed />
            <motion.img
                style={{ width: "70px", height: "auto", position: 'absolute'}}
                src="https://cdn.freebiesupply.com/images/large/2x/cia-logo-black-and-white.png"
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear"
                }}
            />

            
            <button className="close-btn" onClick={() => setOpen(false)}>
                <motion.img
                    style={{ width: "40px", height: "auto", position: 'flex'}}
                    src="https://www.totalwine.com/dynamic/x1000,sq/images/222903233/222903233-1-fr.png"
                    animate={{ rotate: 360 }}
                        transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear"
                    }}
                />
            </button>


            <a className="tt-link" href='https://www.tiktok.com/@totalfoiddeathv3/video/7597568375736454422?is_from_webapp=1&sender_device=pc'>
                <motion.img
                    style={{ width: "100px", height: "auto", position: 'absolute'}}
                    src="https://shared.prolewiki.org/uploads/f/fa/Yakub.png"
                    animate={{ rotate: 90 }}
                />
            </a>


            <motion.img
                style={{ width: "70px", height: "auto", position: 'absolute', margin: "50% -50%"}}
                src="https://preview.redd.it/what-is-agartha-v0-vxqyd8lmbz9g1.jpeg?width=1170&format=pjpg&auto=webp&s=e928f827a7d2d76e104461eb32df04df54402f23"
                animate={{ rotate: -30 }}
                transition={{
                    repeat: Infinity,
                    duration: 0.1,
                    ease: "linear"
                }}
            />


            <h2 className="title-p">🚨 ALERT 🚨</h2>
            <p>The Yakub suspects you of being a goy.</p>
            <p>Dont forget to log-in/register to acces Agartha</p>
            <p className='trademark-loc'>G✡yGuard<sup>TM</sup></p>
            <motion.img
                style={{ width: "70px", height: "auto", position: 'absolute', borderRadius: '30%', margin: "-25% 75%"}}
                src="https://preview.redd.it/ashtar-sheran-and-far-right-nazis-whats-going-on-im-v0-8qryhnoz2kqd1.jpeg?auto=webp&s=2b5c05835dd233c4364506ded3a97af503dd49ed"
            />
            <img className='popup-side-image-inside' src=''/>
        </div>
        <img  className='popup-side-image1' src='https://p16-comment-sign-va.tiktokcdn-eu.com/tos-maliva-i-jj85edgx6n-us/8ede2eeed56c4e419d412f682b9f50bd~tplv-jj85edgx6n-image-medium.jpeg?dr=13024&refresh_token=7e435ac0&x-expires=1800820800&x-signature=Qt3sk7yrSPJ%2Buen%2FpevdQ12uge4%3D&t=67a6c45e&ps=a0626fcd&shp=ff37627b&shcp=ff37627b&idc=no1a'/>
    </div>
  )
}
