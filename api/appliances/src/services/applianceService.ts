import applianceDB from '../db'
import { Appliance } from '../models/appliance'

interface CreateApplianceDTO {
    name: string
    type: string
}

interface UpdateApplianceDTO {
    name?: string
    type?: string
}

class ApplianceService {
    getAll(): Appliance[] {
        return applianceDB
    }

    getById(id: number): Appliance | undefined {
        return applianceDB.find((appliance) => appliance.id === id)
    }

    create(data: CreateApplianceDTO): Appliance {
        const newAppliance: Appliance = {
            id: applianceDB.length
                ? applianceDB[applianceDB.length - 1].id + 1
                : 1,
            name: data.name,
            type: data.type,
            createdAt: new Date(),
        }

        applianceDB.push(newAppliance)

        return newAppliance
    }

    update(
        id: number,
        data: UpdateApplianceDTO
    ): Appliance | undefined {
        const appliance = this.getById(id)

        if (!appliance) {
            return undefined
        }

        if (data.name !== undefined) {
            appliance.name = data.name
        }

        if (data.type !== undefined) {
            appliance.type = data.type
        }

        return appliance
    }

    remove(id: number): boolean {
        const applianceIndex = applianceDB.findIndex(
            (appliance) => appliance.id === id
        )

        if (applianceIndex === -1) {
            return false
        }

        applianceDB.splice(applianceIndex, 1)

        return true
    }

    reboot(id: number) {
        const appliance = this.getById(id)

        if (!appliance) {
            return undefined
        }

        return {
            message: 'Reboot command sent',
            applianceId: id,
            status: 'queued',
        }
    }
}

export default new ApplianceService()