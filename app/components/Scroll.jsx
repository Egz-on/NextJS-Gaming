    'use client'

    import { useEffect, useState, useRef } from 'react'

    export default function HorizontalScroll({ gameId, apiKey }) {
    const [allTags, setAllTags] = useState([])
    const [visible, setVisible] = useState([])
    const [isAutoScrolling, setIsAutoScrolling] = useState(true)
    const scrollContainerRef = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        const fetchTags = async () => {
        try {
            const res = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`)
            const data = await res.json()
            const tags = data.tags || []
            setAllTags(tags)
            setVisible(tags.slice(0, 10)) // Load more initially for better scrolling
        } catch (error) {
            console.log('Failed to fetch tags:', error)
            // Fallback data for testing
            const fallbackTags = [
            { id: 1, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 3, name: 'RPG' },
            { id: 4, name: 'Strategy' },
            { id: 5, name: 'Simulation' },
            { id: 6, name: 'Puzzle' },
            { id: 7, name: 'Racing' },
            { id: 8, name: 'Sports' }
            ]
            setAllTags(fallbackTags)
            setVisible(fallbackTags)
        }
        }

        fetchTags()
    }, [gameId, apiKey])

    // Auto-scroll with requestAnimationFrame for smooth movement
    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container || !isAutoScrolling || visible.length === 0) return

        let startTime = null
        const scrollSpeed = 30 // pixels per second

        const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime

        if (elapsed > 16) { // ~60fps
            container.scrollLeft += scrollSpeed / 60
            
            // Reset scroll position when we reach the middle (seamless loop)
            const maxScroll = container.scrollWidth / 2
            if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = 0
            }
            
            startTime = currentTime
        }

        if (isAutoScrolling) {
            animationRef.current = requestAnimationFrame(animate)
        }
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
        }
        }
    }, [isAutoScrolling, visible.length])

    // Load more tags when needed
    const loadMoreTags = () => {
        if (visible.length < allTags.length) {
        const nextBatch = allTags.slice(visible.length, visible.length + 4)
        setVisible(prev => [...prev, ...nextBatch])
        }
    }

    // Check if we need more tags based on scroll position
    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const checkNeedMoreTags = () => {
        const scrollPercentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100
        if (scrollPercentage > 70 && visible.length < allTags.length) {
            loadMoreTags()
        }
        }

        const interval = setInterval(checkNeedMoreTags, 1000)
        return () => clearInterval(interval)
    }, [visible.length, allTags.length])

    const handleMouseEnter = () => {
        setIsAutoScrolling(false)
    }

    const handleMouseLeave = () => {
        setIsAutoScrolling(true)
    }

    const toggleAutoScroll = () => {
        setIsAutoScrolling(!isAutoScrolling)
    }

    return (
        <div className="container mx-auto">
        
        <div className="flex justify-end mb-2 gap-2">
            <button
            onClick={toggleAutoScroll}
            className={`px-3 py-1 text-xs rounded ${
                isAutoScrolling 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-green-500 text-white hover:bg-green-600'
            } transition`}
            >
            {isAutoScrolling ? 'Pause' : 'Play'}
            </button>
        </div>

        <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-2 scrollbar-hide px-4 py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
            }}
        >
            
            <div className="flex gap-2 animate-none">
            {visible.map((tag, idx) => (
                <button
                key={`first-${tag.id || idx}`}
                className="px-4 py-2 rounded-full bg-cyan-900 text-cyan-300 hover:bg-cyan-800 transition whitespace-nowrap flex-shrink-0 transform hover:scale-105"
                onClick={() => console.log('Clicked:', tag.name)}
                >
                {tag.name}
                </button>
            ))}
            
            {visible.map((tag, idx) => (
                <button
                key={`second-${tag.id || idx}`}
                className="px-4 py-2 rounded-full bg-cyan-900 text-cyan-300 hover:bg-cyan-800 transition whitespace-nowrap flex-shrink-0 transform hover:scale-105"
                onClick={() => console.log('Clicked:', tag.name)}
                >
                {tag.name}
                </button>
            ))}
            </div>
        </div>

        </div>
    )
    }