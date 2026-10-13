Events.on(ClientLoadEvent, () => {
    Vars.content.units().each(u => {
        // Проверяем все ванильные морские корабли
        if (u.naval) {
            u.flying = true;
            u.naval = false;

            // Назначаем фабрику создания сущности для летающих юнитов
            u.constructor = () => UnitEntity.create();

            // Тень для полета
            u.shadowElevation = 0.65;
            u.drawCell = true;
            u.canBoost = false;

            if (u.engineOffset === 0) {
                u.engineOffset = u.hitSize / 2;
            }
        }
    });

    Log.info("[Flying Naval] Все ванильные корабли успешно переведены в режим полета!");
});
