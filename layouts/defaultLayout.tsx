"use client";
import React, { useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { Navbar } from "@/components/navbar";
import {Input} from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Logo } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { CiMail } from "react-icons/ci";


interface IDefaultLayoutProps{
    children:React.ReactNode
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({children}) => {

    const [isLoading, setIsLoading] = useState<Boolean>(true);

    return(
        <>
            {
                isLoading? (<SplashScreen callback={()=>setIsLoading(false)}/>) : (
                    <div className="flex flex-col min-h-screen">
                      <Navbar />
                      <main className="container mx-auto max-w-7xl pt-16 flex-grow">
                        {children}
                      </main>
                      <footer className="flex flex-col items-center justify-center p-2">
                        <div className="w-full h-full bg-content2/80 shadow-sm p-8 m-5 rounded-2xl max-w-7xl flex items-center justify-center md:block">
                          <div className="p-2 flex flex-col w-full">
                            <div className=" flex flex-row items-center justify-start">
                              <Logo size={64} />
                              <p className="font-bold text-inherit">
                                {siteConfig.name}
                              </p> 
                            </div>
                            <Spacer y={10} />
                            <p className="sm:mr-52">
                                {siteConfig.description}
                            </p>
                            <Spacer y={10} />
                            <div className=" grid grid-cols-2 w-full sm:flex sm:flex-row gap-10">
                              <div className="flex flex-col gap-3">
                                <h2 className="font-semibold">
                                  Quick Links
                                </h2>
                                {siteConfig.navItems.map((item) => (
                                  <Link key={item.label} href={item.href}>
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                              <div className="flex flex-col gap-3">
                                <h2 className="font-semibold">
                                  Social Networks
                                </h2>
                                {siteConfig.links.map((item) => (
                                  <Link key={item.label} href={item.href}>
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                              
                              <div className="flex flex-col gap-4">
                                <h2 className="font-semibold">
                                  Downloadables
                                </h2>
                                <Link href="">Stanovy</Link>
                              </div>
                            </div>
                            <Spacer y={10}/>
                            <div
                              className="bg-content3 flex flex-col sm:flex-row gap-4 p-8 rounded-xl items-start sm:items-center "
                            >
                              <div
                                className="flex flex-col w-full"
                              >
                                <h2
                                  className="font-semibold"
                                >
                                  Subscribe to our newsletter
                                </h2>
                                <h4
                                  className="font-thin"
                                >
                                  Receive weekly updates with the newest insights, trends, and tools, straight to your email.
                                </h4>
                              </div>
                              <Input 
                                type="email" 
                                placeholder="JohnDoe@example.com"
                                className="sm:w-96"
                                startContent={
                                  <CiMail/>
                                }
                              />
                              <Button
                                size="md"
                                className="sm:flex-1 sm:w-full"
                                color="primary"
                              >
                                Subscribe
                              </Button>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </div>
                )
            }
        </>
    )
       
}