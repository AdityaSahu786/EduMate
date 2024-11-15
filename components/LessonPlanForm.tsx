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