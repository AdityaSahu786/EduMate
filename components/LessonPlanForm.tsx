"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
    BookOpen,
    Clock,
    Target,
    BookmarkIcon,
    Sparkles,
    GraduationCap,
    Loader2,
    X
} from "lucide-react"
import { useRouter } from "next/router"
import { subtopics, topics, durations, studentLevels } from "@/constants"
import { useToast } from "@/hooks/use-toast"

const LessonPlanForm = ({ isSubscribed }: {
    isSubscribed: boolean
}) => {
      
    const router = useRouter()
    const [ step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        topic: "",
        subtopic: "",
        duration: "",
        studentLevels: "",
        objective: ""
    })
     const [isLoading, setIsLoading] = useState<boolean>(false)
     const { toast } = useToast()

     const [customTopic, setCustomTopic] = useState<string>("")
     const [customSubtopic, setCustomSubtopic] = useState<string>("")

     const handleNext = () => {
        if(isStepValid(Step)) {
            setStep(step + 1)
        }
     }

     const handlePrev = () => setStep(step - 1)

     const handleInputChange = (field: string, value: string) => {
        if (field === "topic") {
            setCustomTopic("")
            setFormData({
                ...formData, topic: value, subtopic: ""
            })
        } else if (field === "subtopic") {
            setCustomSubtopic("")
            setFormData({...formData, subtopic: value})
        } else {
            setFormData({ ...formData, [field]: value });
        }
     };

     const handleCustomTopicChange = (value: string) => {
        setCustomSubtopic(value);
        setFormData({...formData, topic: "", subtopic: ""});
        setCustomSubtopic("");
     };

     const handleCustomSubtopicChange = (value: string) => {
        setCustomSubtopic(value);
        setFormData({ ...formData, subtopic: ""});
     };

     const clearTopic = () => {
        setFormData({...formData, topic: "", subtopic: ""})
        setCustomSubtopic("")
        setCustomTopic("")

     }



    return <div>hello world</div>
}


