import { getConnection } from '../config/database.mjs';

// Create a user in the USERS table and corresponding role-specific table
export async function createUserWithRole({ username, password, email, phone, role, roleData }) {
    let connection;

    try {
        connection = await getConnection();

        // Insert user into USERS table
        const result = await connection.execute(
            `INSERT INTO USERS (username, password, email, phone, role, created_at)
             VALUES (:username, :password, :email, :phone, :role, SYSDATE)
             RETURNING id_user INTO :id_user`,
            {
                username,
                password,
                email,
                phone,
                role,
                id_user: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
            },
            { autoCommit: false }
        );

        const userId = result.outBinds.id_user[0]; // Get generated user ID

        // Insert into the role-specific table
        let roleInsertSQL;
        let roleBindParams;

        switch (role.toUpperCase()) {
            case 'ETUDIANT':
                roleInsertSQL = `
                    INSERT INTO ETUDIANT (id_user, nom_etudiant, prenom_etudiant, sexe, date_naissance, adresse) 
                    VALUES (:id_user, :nom_etudiant, :prenom_etudiant, :sexe, TO_DATE(:date_naissance, 'YYYY-MM-DD'), :adresse)
                `;
                roleBindParams = {
                    id_user: userId,
                    ...roleData,
                };
                break;

            // Add cases for other roles
            default:
                throw new Error(`Unsupported role: ${role}`);
        }

        await connection.execute(roleInsertSQL, roleBindParams, { autoCommit: false });

        // Commit transaction
        await connection.commit();
        return userId;
    } catch (err) {
        if (connection) await connection.rollback(); // Rollback on error
        throw err;
    } finally {
        if (connection) await connection.close();
    }
}

// Find user by username
export async function findUserByUsername(username) {
    let connection;

    try {
        connection = await getConnection();
        const result = await connection.execute(
            `SELECT * FROM USERS WHERE username = :username`,
            [username],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        return result.rows[0];
    } finally {
        if (connection) await connection.close();
    }
}
