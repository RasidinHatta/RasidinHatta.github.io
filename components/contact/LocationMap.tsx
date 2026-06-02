'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"
import { MapPin } from "lucide-react"
import { Map, MapMarker, MarkerContent, MarkerPopup } from "@/components/ui/map"

const LocationMap = () => {
  // Johor Bahru, Malaysia coordinates
  const latitude = 1.4854
  const longitude = 103.7618

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="border-0 shadow-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-64 w-full rounded-lg overflow-hidden">
            <Map
              center={[longitude, latitude]}
              zoom={12}
            >
              <MapMarker latitude={latitude} longitude={longitude}>
                <MarkerContent>
                  <div className="relative flex items-center justify-center">
                    <div className="relative h-8 w-8 rounded-full border-4 border-white bg-red-500 shadow-lg animate-pulse" />
                    <div className="absolute h-8 w-8 rounded-full border-2 border-red-500 bg-red-500/20 animate-ping" />
                  </div>
                </MarkerContent>
                <MarkerPopup closeButton>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Johor Bahru, Malaysia</p>
                    <p className="text-xs text-muted-foreground">📍 My Location</p>
                  </div>
                </MarkerPopup>
              </MapMarker>
            </Map>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default LocationMap
