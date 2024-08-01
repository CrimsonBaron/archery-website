"use client"

import { subtitle, title } from "@/components/primitives";
import { Spacer } from "@nextui-org/spacer";
import {Button, ButtonGroup} from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import HoverScale from "@/components/animation/hover-scale";
import {Divider} from "@nextui-org/divider";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function PricingPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <div className="flex justify-center items-center w-full flex-col">
        <h1 className={title({size: "lg"})}>Pricing plans</h1>
        <h2 className={`${subtitle()} text-center text-9xl w-full`}>We offer a wide range of lesson plans for all to enjoy</h2>
      </div>
      <Spacer y={5}/>
      <ButtonGroup>
        {
          siteConfig.pricingPlans.map(({name}, index) => {
            return(
              <Button 
                color={selectedIndex == index? "primary":"default"}
                variant={selectedIndex == index? "flat": "solid"}
                onClick={()=>{
                  setSelectedIndex(index)
                }}
              >
                {name}
              </Button>
            )
          })
        }
      </ButtonGroup>
      <Spacer y={10}/>
      <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
        {
          siteConfig.pricingPlans[selectedIndex].plans.map((item)=>{
            return(
              <HoverScale className="flex flex-col justify-start items-start p-4 rounded-2xl bg-content2/80 flex-1 w-full h-64">
                  <h2 className="font-bold">{item.name}</h2>
                  <h3>{item.desciption}</h3>
                  <div className="flex-1"></div>
                  <Spacer y={5}/>
                  <h1 className={title({size:"sm"})}>{item.price}</h1>
                  <Spacer y={5}/>
                  <Button className="w-full" color="primary" href="/contact">Get  started</Button>
              </HoverScale>
            )
          })
        }
      </div>
      <div className="md:block hidden w-full p-2 ">
          <div className="flex w-full">
              <div className="font-bold text-lg ">Features</div>
              <div className="flex-1"></div>
              {
                siteConfig.pricingPlans[selectedIndex].plans.map((item)=>{
                  return(
                    <>
                      <div className="font-bold text-lg">{item.name}</div>
                      <div className="flex-1"></div>
                    </>
                  )
                })
              }
          </div>
          <Spacer y={3}></Spacer>
          <Divider></Divider>
          <Spacer y={3}></Spacer>
          <div className="flex w-full">
              <div className="font-bold text-lg ">Introdactury lesson</div>
              <div className="flex-1"></div>
              {
                siteConfig.pricingPlans[selectedIndex].plans.map((item)=>{
                  return(
                    <>
                      <div className="font-bold text-lg text-center">
                        {
                          item.introducturyLesson? <FaCheck className="text-success-300" /> : <ImCross className="text-danger-300" />
                        }
                      </div>
                      <div className="flex-1"></div>
                    </>
                  )
                })
              }
          </div>
          <Spacer y={3}></Spacer>
          <div className="flex w-full">
              <div className="font-bold text-lg ">Flexible Scheduling</div>
              <div className="flex-1"></div>
              {
                siteConfig.pricingPlans[selectedIndex].plans.map((item)=>{
                  return(
                    <>
                      <div className="font-bold text-lg text-center">
                        {
                          item.flexibleScheduling? <FaCheck className="text-success-300" /> : <ImCross className="text-danger-300" />
                        }
                      </div>
                      <div className="flex-1"></div>
                    </>
                  )
                })
              }
          </div>
          <Spacer y={3}></Spacer>
          <div className="flex w-full">
              <div className="font-bold text-lg ">Equipment included</div>
              <div className="flex-1"></div>
              {
                siteConfig.pricingPlans[selectedIndex].plans.map((item)=>{
                  return(
                    <>
                      <div className="font-bold text-lg text-center">
                        {
                          item.equipmentIncluded? <FaCheck className="text-success-300" /> : <ImCross className="text-danger-300" />
                        }
                      </div>
                      <div className="flex-1"></div>
                    </>
                  )
                })
              }
          </div>
      </div>
    </>
  );
}
