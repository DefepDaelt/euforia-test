-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "player_name" TEXT,
    "name" TEXT NOT NULL,
    "current_hit_points" INTEGER,
    "max_hit_points" INTEGER,
    "current_sanity" INTEGER,
    "max_sanity" INTEGER,
    "current_stress_points" INTEGER,
    "max_stress_points" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);
