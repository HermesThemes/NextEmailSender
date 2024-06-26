"use client"

import { Button } from "@nextui-org/react";
import Email from "@/emails/main";
import New from "@/emails/offredm";
import { Tabs } from "../../components/tabs";
import { useState } from "react";
import Link from "next/link";


export default function Choose() {
    const [template, setTemplate] = useState("")
    const tabs = [
        {
          title: "Les Packs",
          value: "mainmail",
          content: (
            <div className="w-full overflow-hidden h-full mx-auto overflow-scroll rounded-2xl p-10 border border-1 border-zinc-800 bg-gradient-to-r dark:from-zinc-950 dark:to-zinc-800 from-slate-50 to-slate-200 scrollbar relative min-h-[500px]">
              <div class="absolute right-0 top-0 h-px w-[300px] gradientLine"></div>
              <p className="text-2xl font-bold">Product Tab</p>
              <Email/>
              <Link href={`/emails/main`} >
                <Button className="mx-auto block" color="primary" size="lg" variant="shadow">
                    Choose
                </Button>
              </Link>
            </div>
          ),
        },
        {
          title: "offre de digital marketing",
          value: "offredm",
          content: (
            <div className="relative w-full overflow-hidden relative h-full mx-auto overflow-scroll rounded-2xl p-10 border border-1 border-zinc-800 bg-gradient-to-r dark:from-zinc-950 dark:to-zinc-800 from-slate-50 to-slate-200 scrollbar min-h-[500px]">
              <div class="absolute right-0 top-0 h-px w-[300px] gradientLine"></div>
              <p className="text-2xl font-bold">Services tab</p>
              <New/>
              <Link href={`/emails/offredm`}>
                <Button className="mx-auto mt-5 block" color="primary" size="lg" variant="shadow">
                    Choose
                </Button>
              </Link>
            </div>
          ),
        },
        {
          title: "Playground",
          value: "playground",
          content: (
            <div className="w-full overflow-hidden relative h-full overflow-scroll rounded-2xl p-10 border border-1 border-zinc-800 bg-gradient-to-r dark:from-zinc-950 dark:to-zinc-800 from-slate-50 to-slate-200 scrollbar min-h-[500px]">
              <div class="absolute right-0 top-0 h-px w-[300px] gradientLine"></div>
              <p className="text-2xl font-bold">Playground tab</p>
              <Email/>
              <Link href={`/emails/email3`} className="mt-5">
                <Button className="mx-auto mt-5 block" color="primary" size="lg" variant="shadow">
                    Choose
                </Button>
              </Link>
            </div>
          ),
        },
    ]
  return (
    <div className="pb-[50px]">
        <div className="h-[10rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20 ">
            <p className="md:text-6xl mx-auto font-bold text-center mb-[60px] hero-text">Choose A Template</p>
            <Tabs tabs={tabs} choose={setTemplate} activeTabClassName={"text-black"}/>
            
        </div>

    </div>
  )
}
